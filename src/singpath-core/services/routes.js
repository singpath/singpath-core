'use strict';

import {spfShared} from '../module.js';

spfShared.constant('routes', {
  home: '/'
});

spfShared.factory('urlFor', [
  'routes',
  function urlForFactory(routes) {
    var routeFns = Object.keys(routes).reduce(function(fns, name) {
      var parts = routes[name].split('/');

      fns[name] = function(keys) {
        keys = keys || {};
        return parts.map(function(part) {
          return part[0] === ':' ? keys[part.slice(1)] : part;
        }).join('/');
      };

      return fns;
    }, {});

    return function(name, params) {
      var fn = routeFns[name] || routeFns.home;
      return fn(params);
    };
  }
]);

spfShared.filter('urlFor', [
  'urlFor',
  function urlForFilterFactory(urlFor) {
    return function urlForFilter(name, params) {
      var url = urlFor(name, params);
      return url;
    };
  }
]);
