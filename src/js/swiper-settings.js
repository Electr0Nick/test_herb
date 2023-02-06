import Swiper from './modules/swiper-bundle.esm.browser.min.js';



// -----------------------------------------mainslider-----------------------------------------
export function mainSwiper() {
  const lilSlider = new Swiper('.lil-slider', {
    wrapperClass: 'lil-slider__wrapper',
    slideClass: 'lil-slider__slide',
    slidesPerView: 3,
  });
  const mainSlider = new Swiper('.mainslider', {
    wrapperClass: 'mainslider__wrapper',
    slideClass: 'mainslider__slide',
    parallax: true,
    speed: 500,
    thumbs: {
      swiper: lilSlider,
    },
  });
}

// -----------------------------------------news-slider-----------------------------------------
export function newsSwiper() {
  const newsSlider = new Swiper('.news__slider', {
    wrapperClass: 'news__wrapper',
    slideClass: 'news__slide',
    navigation: {
      prevEl: `.news__button_prev`,
      nextEl: `.news__button_next`,
    },
    speed: 500,
    spaceBetween: 36,
    breakpoints: {
      320: {
        slidesPerView: 1,
        simulateTouch: true,
      },
      650: {
        slidesPerView: 2,
        simulateTouch: true,
      },
      950: {
        slidesPerView: 3,
        simulateTouch: false,
      },
    },
  });
}

// -----------------------------------------specialists-slider-----------------------------------------
export function specialistsSwiper() {
  const specialistsSlider = new Swiper('.specialists__slider', {
    wrapperClass: 'specialists__wrapper',
    slideClass: 'specialists__slide',
    navigation: {
      prevEl: `.specialists__button_prev`,
      nextEl: `.specialists__button_next`,
    },
    speed: 500,
    simulateTouch: true,
    breakpoints: {
      500: {
        enabled: false,
        slidesPerView: `auto`,
      },
    },
  });
}

// -----------------------------------------partnersslider-----------------------------------------
export function partnersSwiper() {
  const partnersSlider = new Swiper('.partnersslider__slider', {
    wrapperClass: 'partnersslider__wrapper',
    slideClass: 'partnersslider__slide',
    slidesPerView: `auto`,
    spaceBetween: 12,
    speed: 4000,
    loop: true,
    simulateTouch: false,
    autoplay: {
      enabled: true,
      delay: 1,
    },
  });
}