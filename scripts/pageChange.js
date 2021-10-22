"use strict";

const pageChangeСurtain = document.querySelector(".page-change");
const pageChangeLinks = document.querySelectorAll(
  'a:not([href^="#"],[href^="tel"],[href^="mailto"],[href^="http"],[target="_blank"])'
);
window.onload = () => {
  pageChangeСurtain.style.opacity = 0;
};
for (let i = 0; i < pageChangeLinks.length; i++) {
  pageChangeLinks[i].addEventListener("click", function (e) {
    const redirect = pageChangeLinks[i].href;
    e.preventDefault();
    pageChangeСurtain.style.opacity = "1";
    setTimeout(() => {
      document.location.href = `${redirect}`;
    }, 500);
  });
}
