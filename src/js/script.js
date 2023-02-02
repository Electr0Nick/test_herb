'use strict';

import isWebp from './modules/can-browser-support-webp.js';
isWebp();

import { mainSwiper, partnersSwiper } from './swiper-settings.js';
mainSwiper();
partnersSwiper();




const activeClass = (el) => el.classList.toggle('active');


// ------------------------------------------------search block------------------------------------------------
const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const headerContainer = document.getElementById('header-container');
const addActiveForSearch = () => activeClass(headerContainer);
searchOpen.addEventListener('click', addActiveForSearch);
searchClose.addEventListener('click', addActiveForSearch);


// ------------------------------------------------feedback popup------------------------------------------------
const feedbackOpen = document.getElementById('feedback-open');
const feedbackClose = document.getElementById('feedback-close');
const feedback = document.getElementById('feedback');
const addActiveForFeedback = () => {
  activeClass(feedback);
  activeClass(feedbackOpen);
};
feedbackOpen.addEventListener('click', addActiveForFeedback);
feedbackClose.addEventListener('click', addActiveForFeedback);


const feedbackInputs = document.getElementsByClassName('feedback__input');
const feedbackLabels = document.getElementsByClassName('feedback__label');

for (let i = 0; i < feedbackInputs.length; i++) {
  const input = feedbackInputs[i];
  input.addEventListener('focus', function() {
    feedbackLabels[i].classList.add('active');
  });
}