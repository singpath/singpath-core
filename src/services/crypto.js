'use strict';

import CryptoJS from 'cryptojs';
import 'cryptojs/md5.js';
import 'cryptojs/pbkdf2.js';
import 'cryptojs/sha256.js';

import {spfShared} from '../module.js';

spfShared.provider('spfCrypto', [
  function cryptoProvider() {
    var saltSize = 128 / 8;
    var hashOpts = {
      keySize: 256 / 32,
      iterations: 1012
    };

    this.setSaltSize = function(size) {
      saltSize = size;
    };

    this.setHashKeySize = function(keySize) {
      hashOpts.keySize = keySize;
    };

    this.setIterations = function(iterations) {
      hashOpts.iterations = iterations;
    };

    this.$get = [
      function cryptoFactory() {
        var algo = CryptoJS.algo;
        var pbkdf2 = CryptoJS.PBKDF2;
        var hex = CryptoJS.enc.Hex;
        var prf = 'SHA256';

        return {
          md5: function(message) {
            return new CryptoJS.MD5(message);
          },

          password: {
            /**
             * Return a hash for the password and options allowing
             * to rebuild the same against the same password.
             *
             * The options will include the hashing algorithm name, the
             * salt an other parameters.
             *
             */
            newHash: function(password) {
              var salt = CryptoJS.lib.WordArray.random(saltSize);
              var hash = pbkdf2(password, salt, {
                keySize: hashOpts.keySize,
                iterations: hashOpts.iterations,
                hasher: algo[prf]
              });

              return {
                value: hex.stringify(hash),
                options: {
                  salt: hex.stringify(salt),
                  iterations: hashOpts.iterations,
                  keySize: hashOpts.keySize,
                  hasher: 'PBKDF2',
                  prf: prf
                }
              };
            },

            /**
             * Return a hash built from the password, the hash and the
             * hashing options.
             *
             * The salt should be hex encoded.
             *
             */
            fromSalt: function(password, hexSalt, options) {
              var salt = hex.parse(hexSalt);
              var h = options.prf || prf;
              var hash = pbkdf2(password, salt, {
                keySize: options.keySize || hashOpts.keySize,
                iterations: options.iterations || hashOpts.iterations,
                hasher: algo[h]
              });
              return hex.stringify(hash);
            }
          },

          randomString: function(size) {
            var random = CryptoJS.lib.WordArray.random(size);
            return hex.stringify(random);
          }
        };
      }
    ];
  }
]);
