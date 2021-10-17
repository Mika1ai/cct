"use strict"

const preloaderWrapper = document.querySelector(".preloader");
const preloader = document.querySelector(".preloader__lottie");

preloader.addEventListener("ready", () => {
	preloader.play();
});

window.addEventListener("load", () => {
	setTimeout(() => {
		preloaderWrapper.style.opacity = "0";
		preloaderWrapper.style.pointerEvents = "none";

		setTimeout(() => {
			preloaderWrapper.remove();
		}, 1500)
	}, 4000)
});