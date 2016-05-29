'use strict';

import angular from 'angular';
import {spfShared} from './index.js';

export const module = angular.module('demo', [spfShared.name]);

module.constant('routes', {
  home: '/icons',
  icons: '/icons'
});
