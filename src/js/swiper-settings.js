import Swiper from './modules/swiper-bundle.esm.browser.min.js';

// -----------------------------------------mainslider-----------------------------------------
export function mainSwiper() {
  const mainSlider = new Swiper('.mainslider', {
    wrapperClass: 'mainslider__wrapper',
    slideClass: 'mainslider__slide',
    parallax: true,
    // loop: true,
    // speed: 1000,
    // pagination: {
      // el: '.swiper-pagination',
      // type: 'bullets',
      // bulletClass: 'mainslider__bullet',
      // bulletActiveClass: 'mainslider__bullet_active',
      // clickable: true,
    // },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: false,
    // },
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