"use strict";

const ppSwiper = new Swiper(".pp__swiper-container", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".pp__swiper-pagination",
    bulletClass: "pp__swiper-bullet",
    bulletActiveClass: "pp__swiper-bullet--active",
    clickable: false,
  },

  scrollbar: {
    el: false,
  },

  spaceBetween: 20,

  speed: 1000,

  
	breakpoints: {
		0: {
      slidesPerGroup: 1,
      slidesPerView: 1.2,
		},
		480: {
      slidesPerGroup: 1,
      slidesPerView: 1.6,
    },
		768: {
      slidesPerGroup: 1,
      slidesPerView: 2.3,
    },
    1050: {
      slidesPerGroup: 1,
      slidesPerView: 2.3,
    },
    1280: {
      slidesPerGroup: 1,
			slidesPerView: 3,
    },
  },
});