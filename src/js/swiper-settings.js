import Swiper from './modules/swiper-bundle.esm.browser.min.js';



// -----------------------------------------mainslider-----------------------------------------
export function mainSwiper() {
  const lilSlider = new Swiper('.lil-slider', {
    wrapperClass: 'lil-slider__wrapper',
    slideClass: 'lil-slider__slide',
    slidesPerView: 3,
  })
  const mainSlider = new Swiper('.mainslider', {
    wrapperClass: 'mainslider__wrapper',
    slideClass: 'mainslider__slide',
    parallax: true,
    speed: 500,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    thumbs: {
      swiper: lilSlider,
    },
  })
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
  })
}