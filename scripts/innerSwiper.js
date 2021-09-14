"use strict";

if (window.innerWidth < 1281) {
	var innerSwiper = new Swiper(".inner__swiper-container", {
		direction: "horizontal",
		loop: false,

		pagination: {
			el: ".inner__swiper-pagination",
			bulletClass: "inner__swiper-bullet",
			bulletActiveClass: "inner__swiper-bullet--active",
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
				slidesPerView: 1.1,
			},
			480: {
				slidesPerGroup: 1,
				slidesPerView: 1.6,
			},
			768: {
				slidesPerGroup: 1,
				slidesPerView: 1.7,
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
}