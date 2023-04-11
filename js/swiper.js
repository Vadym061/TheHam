'use strict';

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 4,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  
let swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });