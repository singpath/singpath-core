'use strict';

import {spfShared} from '../module.js';

import './countries.js';
import './crypto.js';
import './datastore.js';
import './firebase.js';
import './routes.js';
import * as icons from './icons/icons.js';

spfShared.config(icons.config);
spfShared.run(icons.run);
