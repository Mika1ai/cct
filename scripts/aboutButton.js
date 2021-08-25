"use strict";

const wwdBlock = document.querySelector(".wwd");
const logoWrapper = document.querySelector(".logo-wrapper");

const aboutButton = document.querySelector(".about__button");
const aboutLeft = document.querySelector(".about__left");


const logo = document.querySelector(".logo");
const logoSecond = document.querySelector(".logo--second");

logo.addEventListener("ready", () => {
	const logoButton = logo.renderRoot.children[0].querySelector("#__lottie_element_60");

	logoButton.style.opacity = "0";
	logoButton.style.transition = "opacity 0.3s ease";

	if (window.innerWidth > 1050) {
		window.addEventListener("scroll", () => {
			if (
				aboutButton.offsetTop > 0 &&
				aboutButton.offsetTop < aboutLeft.scrollHeight - aboutButton.scrollHeight - 1
			) {
				aboutButton.style.opacity = "1";
				aboutButton.style.pointerEvents = "auto";
				logoButton.style.opacity = "1";
			} else {
				aboutButton.style.opacity = "0";
				aboutButton.style.pointerEvents = "none";
				logoButton.style.opacity = "0";
			}
		});
	}
});



if (window.innerWidth <= 1050) {
		
	logoSecond.addEventListener("ready", () => {
		const logoButtonSecond = logoSecond.renderRoot.children[0].querySelector("#__lottie_element_115");
	
		logoButtonSecond.style.opacity = "0";
		logoButtonSecond.style.transition = "opacity 0.3s ease";

		window.addEventListener("scroll", () => {
			if (
				+wwdBlock.getBoundingClientRect().top.toFixed(0) >
				+logoWrapper.getBoundingClientRect().top.toFixed(0)
			) {
				logoWrapper.style.opacity = "1";
			} else {
				logoWrapper.style.opacity = "0";
			}

			if (
				+logoWrapperSecond.getBoundingClientRect().top.toFixed(0) <
				+logoWrapper.getBoundingClientRect().top.toFixed(0)
			) {
				aboutButton.style.opacity = "0";
				logoButtonSecond.style.opacity = "0";
				aboutButton.style.pointerEvents = "none";
			} else {
				aboutButton.style.opacity = "1";
				logoButtonSecond.style.opacity = "1";
				aboutButton.style.pointerEvents = "auto";
			}
		});

		const logoWrapperSecond = document.querySelector(".logo-wrapper--second");
		const heightOfBody = document.body.scrollHeight;
		const heightOverLogo =
			logoWrapperSecond.getBoundingClientRect().top +
			document.documentElement.scrollTop;

		logoWrapperSecond.style.height = `${heightOfBody - heightOverLogo}px`;
	});
}
	



// setTimeout(() => {

// 	const logoButton = logo.renderRoot.children[0].querySelector("#__lottie_element_63");
// 	const logoButtonSecond = logoSecond.renderRoot.children[0].querySelector("#__lottie_element_118");

// 	logoButton.style.opacity = "0";
// 	logoButton.style.transition = "opacity 0.3s ease";

// 	logoButtonSecond.style.opacity = "0";
// 	logoButtonSecond.style.transition = "opacity 0.3s ease";

// 	const wwdBlock = document.querySelector(".wwd");
// 	const logoWrapper = document.querySelector(".logo-wrapper");

// 	const aboutButton = document.querySelector(".about__button");
// 	const aboutLeft = document.querySelector(".about__left");

// 	if (window.innerWidth < 1050) {

// 		window.addEventListener("scroll", () => {
// 			if (
// 				+wwdBlock.getBoundingClientRect().top.toFixed(0) >
// 				+logoWrapper.getBoundingClientRect().top.toFixed(0)
// 			) {
// 				logoWrapper.style.opacity = "1";
// 			} else {
// 				logoWrapper.style.opacity = "0";
// 			}

// 			if (
// 				+logoWrapperSecond.getBoundingClientRect().top.toFixed(0) <
// 				+logoWrapper.getBoundingClientRect().top.toFixed(0)
// 			) {
// 				aboutButton.style.opacity = "0";
// 				logoButtonSecond.style.opacity = "0";
// 				aboutButton.style.pointerEvents = "none";
// 			} else {
// 				aboutButton.style.opacity = "1";
// 				logoButtonSecond.style.opacity = "1";
// 				aboutButton.style.pointerEvents = "auto";
// 			}
// 		});

// 		const logoWrapperSecond = document.querySelector(".logo-wrapper--second");
// 		const heightOfBody = document.body.scrollHeight;
// 		const heightOverLogo =
// 			logoWrapperSecond.getBoundingClientRect().top +
// 			document.documentElement.scrollTop;

// 		logoWrapperSecond.style.height = `${heightOfBody - heightOverLogo}px`;
// 	}

// 	if (window.innerWidth > 1050) {
// 		window.addEventListener("scroll", () => {
// 			if (
// 				aboutButton.offsetTop > 0 &&
// 				aboutButton.offsetTop < aboutLeft.scrollHeight - aboutButton.scrollHeight
// 			) {
// 				aboutButton.style.opacity = "1";
// 				aboutButton.style.pointerEvents = "auto";
// 				logoButton.style.opacity = "1";
// 			} else {
// 				aboutButton.style.opacity = "0";
// 				aboutButton.style.pointerEvents = "none";
// 				logoButton.style.opacity = "0";
// 			}
// 		});
// 	}
	
// }, 1000);