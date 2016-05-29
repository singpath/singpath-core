'use strict';

import {spfShared} from '../module.js';

import './countries.js';
import {config as configIcons, run as cacheIcon} from './icons/icons.js';
import * as crypto from './crypto.js';
import * as routes from './crypto.js';

// TODO: refactor
import './datastore.js';
import './firebase.js';

spfShared.constant('spfCryptoSaltSize', crypto.saltSize);
spfShared.constant('spfCryptoHashKeySize', crypto.keySize);
spfShared.constant('spfCryptoIteration', crypto.iterations);
spfShared.service('spfCrypto', crypto.Service);

spfShared.constant('routes', routes.defaults);
spfShared.factory('urlFor', routes.urlForFactory);
spfShared.filter('urlFor', routes.urlForFilter);

spfShared.config(configIcons);
spfShared.run(cacheIcon);
