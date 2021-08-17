"use strict";

const aboutButton = document.querySelector(".about__button");

const aboutButtonStyle = window.getComputedStyle(aboutButton);
const topStiky = parseFloat(aboutButtonStyle.getPropertyValue("top")).toFixed(
  0
);

let topPage = aboutButton.getBoundingClientRect().top.toFixed(0);

window.addEventListener("scroll", () => {
  topPage = aboutButton.getBoundingClientRect().top.toFixed(0);
  if (topStiky === topPage) {
    aboutButton.style.opacity = "1";
    aboutButton.style.pointerEvents = "auto";
  } else {
    aboutButton.style.opacity = "0";
    aboutButton.style.pointerEvents = "none";
  }
});
