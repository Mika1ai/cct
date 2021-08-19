"use strict";

const wwdBlock = document.querySelector(".wwd");
const logoWrapper = document.querySelector(".logo-wrapper");

const aboutButton = document.querySelector(".about__button");
const aboutLeft = document.querySelector(".about__left");

if (window.innerWidth < 1050) {
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
    } else {
      aboutButton.style.opacity = "1";
    }
  });

  const logoWrapperSecond = document.querySelector(".logo-wrapper--second");
  const heightOfBody = document.body.scrollHeight;
  const heightOverLogo =
    logoWrapperSecond.getBoundingClientRect().top +
    document.documentElement.scrollTop;

  logoWrapperSecond.style.height = `${heightOfBody - heightOverLogo}px`;
}

if (window.innerWidth > 1050) {
  window.addEventListener("scroll", () => {
    if (
      aboutButton.offsetTop > 0 &&
      aboutButton.offsetTop < aboutLeft.scrollHeight - aboutButton.scrollHeight
    ) {
      aboutButton.style.opacity = "1";
    } else {
      aboutButton.style.opacity = "0";
    }
  });
}
