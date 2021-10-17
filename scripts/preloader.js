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




///////////////////////////////////////

const url = document.URL;
const farmsIcon = document.querySelector(".footer__farms-icon");

console.log("url", url);
console.log("farmsIcon", farmsIcon);

console.log("url.indexOf(.about) !== -1", url.indexOf(".about") !== -1);

if (url.indexOf(".about") !== -1) {
	console.log("yes");
	farmsIcon.remove();
}