'use strict';

import isWebp from './modules/can-browser-support-webp.js';
isWebp();

import { mainSwiper, newsSwiper, specialistsSwiper, partnersSwiper } from './swiper-settings.js';
mainSwiper();
newsSwiper();
specialistsSwiper();
partnersSwiper();


const activeClass = (el) => el.classList.toggle('active');


// ------------------------------------------------search block------------------------------------------------
const searchOpen = document.getElementById('search-open');
const searchClose = document.getElementById('search-close');
const headerContainer = document.getElementById('header-container');
const arrHeaderBlocks = document.getElementsByClassName('header__block');

const addActiveForSearch = () => {
  activeClass(headerContainer);
  for (let i = 0; i < arrHeaderBlocks.length; i++) {
    const headerBlock = arrHeaderBlocks[i];
    activeClass(headerBlock);
  }
};
searchOpen.addEventListener('click', addActiveForSearch);
searchClose.addEventListener('click', addActiveForSearch);

// ------------------------------------------------burger------------------------------------------------
const navListOpen = document.getElementById('burger');
const navListClose = document.getElementById('first-nav-close');
const nav = document.getElementById('first-nav');
const navList = document.getElementById('first-nav-list');
const navListBack = document.getElementById('first-nav-bg');
const addActiveForNavList = () => {
  activeClass(nav);
  activeClass(navListBack);
  activeClass(navList);
  activeClass(feedbackOpen);
};
navListOpen.addEventListener('click', addActiveForNavList);
navListClose.addEventListener('click', addActiveForNavList);


const subList = document.getElementById('first-nav-sublist');
const subListTitle = document.getElementById('first-nav-title');
const subListBtn = document.getElementById('first-nav-sublist-btn');
const addActiveForsubList = () => {
  activeClass(subList);
  activeClass(subListBtn);
  activeClass(subListTitle);
}
subListBtn.addEventListener('click', addActiveForsubList);
subListTitle.addEventListener('click', addActiveForsubList);



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
const feedbackPlaceholders = document.getElementsByClassName('feedback__placeholder');

for (let i = 0; i < feedbackInputs.length; i++) {
  const input = feedbackInputs[i];
  input.addEventListener('focus', function() {
    feedbackLabels[i].classList.add('active');
    feedbackPlaceholders[i].classList.add('active');
  });
  input.addEventListener('blur', function() {
    if (!input.value) {
      feedbackLabels[i].classList.remove('active');
      feedbackPlaceholders[i].classList.remove('active');
    }
  });
}


// ------------------------------------------------subscribe input------------------------------------------------
const subscribeInput = document.getElementById('subscribe-input');
const subscribeBtn = document.getElementById('subscribe-btn');

subscribeInput.addEventListener('input', function() {
  if (subscribeInput.value) {
    subscribeBtn.disabled = false;
    subscribeBtn.classList.remove('button_grey');
    subscribeBtn.classList.add('button_pink');
  } else {
    subscribeBtn.disabled = true;
    subscribeBtn.classList.remove('button_pink');
    subscribeBtn.classList.add('button_grey');
  }
});