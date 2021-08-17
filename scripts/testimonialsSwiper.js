"use strict";

const testimonialsSwiper = new Swiper(".testimonials__swiper-container", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".testimonials__swiper-pagination",
    bulletClass: "testimonials__swiper-bullet",
    bulletActiveClass: "testimonials__swiper-bullet--active",
    clickable: false,
  },

  scrollbar: {
    el: false,
  },

  spaceBetween: 20,

  speed: 1000,

  slidesPerGroup: 1,
  slidesPerView: "auto",

  breakpoints: {
    0: {
      slidesPerGroup: 1,
      slidesPerView: "auto",
    },
    1280: {
      slidesPerGroup: 4,
      slidesPerView: 4,
    },
  },
});

if (window.innerWidth > 1650) {
  const gradientLeft = document.querySelector(".swiper-gradient-left");
  const gradientRight = document.querySelector(".swiper-gradient-right");
  const gradientWidth =
    (window.innerWidth - document.querySelector(".container").scrollWidth - 8) /
    2;
  gradientLeft.style.width = gradientRight.style.width = `${gradientWidth}px`;
  gradientLeft.style.left = gradientRight.style.right = `-${gradientWidth}px`;
}
