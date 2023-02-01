'use strict';

import isWebp from './modules/can-browser-support-webp.js';
isWebp();

import { mainSwiper, partnersSwiper } from './swiper-settings.js';
mainSwiper();
partnersSwiper();