"use strict";

const testimonialsSwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    bulletClass: "testimonials__swiper-bullet",
    bulletActiveClass: "testimonials__swiper-bullet--active",
    clickable: true,
  },

  scrollbar: {
    el: "false",
  },

  slidesPerGroup: 4,
  slidesPerView: 4,
  spaceBetween: 20,

  speed: 1000,
});

const gradientLeft = document.querySelector(".swiper-gradient-left");
const gradientRight = document.querySelector(".swiper-gradient-right");
const gradientWidth =
  (window.innerWidth - document.querySelector(".container").scrollWidth - 8) /
  2;
console.log(gradientWidth);
gradientLeft.style.width = gradientRight.style.width = `${gradientWidth}px`;
gradientLeft.style.left = gradientRight.style.right = `-${gradientWidth}px`;
