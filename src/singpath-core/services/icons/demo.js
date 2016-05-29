import {module} from '../../demo.js';

import template from './demo.html!text';

/**
 * Holds the list of icon to display
 */
class Controller {

  constructor(spfNavBarService) {

    spfNavBarService.update('Icons');

    this.icons = [
      'add',
      'add-circle-outline',
      'arrow-back',
      'arrow-forward',
      'bookmark-outline',
      'check',
      'chevron-left',
      'chevron-right',
      'clear',
      'create',
      'delete',
      'done',
      'exit-to-app',
      'highlight-remove',
      'home',
      'info-outline',
      'keyboard-arrow-left',
      'keyboard-arrow-right',
      'launch',
      'loop',
      'more-horiz',
      'not-interested',
      'person',
      'play-arrow',
      'reorder',
      'settings'
    ];
  }
}

Controller.$inject = ['spfNavBarService'];

module.component('iconsDemo', {template, controller: Controller});

module.config([
  '$routeProvider',
  'routes',
  function($routeProvider, routes) {
    $routeProvider.when(routes.icons, {
      template: '<icons-demo></icons-demo>'
    });
  }
]);
