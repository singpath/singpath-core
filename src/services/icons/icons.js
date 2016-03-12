'use strict';

import {spfShared} from '../../module.js';

import setTmpl from './svgdefs.svg!text';
import pythonTmpl from './icons-python.svg!text';
import angularjsTmpl from './icons-angularjs.svg!text';
import javascriptTmpl from './icons-javascript.svg!text';
import javaTmpl from './icons-java.svg!text';

const iconSet = {url: 'icons/svgdefs.svg', tmpl: setTmpl, vb: 1024};
const langIcons = [{
  title: 'language:python',
  url: 'icons/icons-python.svg',
  tmpl: pythonTmpl,
  vb: 120
}, {
  title: 'language:angularjs',
  url: 'icons/icons-angularjs.svg',
  tmpl: angularjsTmpl,
  vb: 120
}, {
  title: 'language:javascript',
  url: 'icons/icons-javascript.svg',
  tmpl: javascriptTmpl,
  vb: 630
}, {
  title: 'language:java',
  url: 'icons/icons-java.svg',
  tmpl: javaTmpl,
  vb: 128
}];

/**
 * Defined an icon set.
 *
 * The set is build at https://icomoon.io/app:
 * 0. go to https://icomoon.io/app.
 * 1. Select icons from the "Material Design Icons" collection.
 * 2. download and extract the set.
 * 3. copy svgdefs.svg into this component folder
 *    (replace the existing ones).
 * 4. open svgdefs.svg and replace all the `symbols` tags for `g` tags.
 * 5. open svgdefs.svg and rename all icon ids from "icon-something" to just
 *    "something"
 *
 * The set is now ready.
 */
spfShared.config([
  '$mdIconProvider',
  function($mdIconProvider) {
    $mdIconProvider.defaultIconSet(iconSet.url, iconSet.vb);
    langIcons.forEach(i => $mdIconProvider.icon(i.title, i.url, i.vb));
  }
]);

spfShared.run([
  '$templateCache',
  function($templateCache) {
    $templateCache.put(iconSet.url, iconSet.tmpl);
    langIcons.forEach(i => $templateCache.put(i.url, i.tmpl));
  }
]);
