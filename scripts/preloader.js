"use strict";

const preloaderWrapper = document.querySelector(".preloader");
const preloader = document.querySelector(".preloader__lottie");

preloaderReady();

function preloaderReady() {
  const preloaderInner = preloader.renderRoot.children[0].querySelector(
    "#__lottie_element_4"
  );
  if (!preloaderInner) {
    setTimeout(preloaderReady, 200);
    return;
  }
  preloader.play();
  setTimeout(() => {
    preloaderWrapper.style.opacity = "0";
    preloaderWrapper.style.pointerEvents = "none";
  }, 4000);
}
