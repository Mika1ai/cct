"use strict";

if (window.innerWidth <= 768) {
  const testimonialsSwiper = new Swiper(".portfolio__swiper-container", {
    direction: "horizontal",
    loop: false,
    loopedSlides: 0,
    pagination: {
      el: ".portfolio__swiper-pagination",
      bulletClass: "portfolio__swiper-bullet",
      bulletActiveClass: "portfolio__swiper-bullet--active",
      clickable: false,
    },

    scrollbar: {
      el: false,
    },

    spaceBetween: 20,

    speed: 1000,

    slidesPerGroup: 1,
    slidesPerView: "auto",
  });
}
