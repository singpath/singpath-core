'use strict';

import angular from 'angular';
import {module} from './singpath-core/demo.js';

import './singpath-core/components/demo/demo.js';
import './singpath-core/services/icons/demo.js';

module.config([
  '$routeProvider',
  'routes',
  'spfFirebaseRefProvider',
  function($routeProvider, routes, spfFirebaseRefProvider) {
    const id = window.SINGPATH && window.SINGPATH.firebaseId || 'singpath';

    spfFirebaseRefProvider.setBaseUrl(`https://${id}.firebaseio.com/`);

    $routeProvider.otherwise({
      redirectTo: routes.icons
    });
  }
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, [module.name], {strictDi: true});
});
