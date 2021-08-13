"use strcit";
const navbarList = document.querySelector(".navbar__list");
const navbarListItem = document.querySelectorAll(".navbar__list-item");
const navbarButton = document.querySelector(".navbar__menu-button");
const navbarLines = document.querySelectorAll("[class^='navbar__menu-l']");
let delay = 0;

for (let i = 0; i < navbarListItem.length; i++) {
  navbarListItem[i].style.transitionDelay = `${delay}ms`;
  delay += 150;
}

function navbarOpenClose() {
  navbarButton.classList.toggle("navbar-open");
  navbarList.classList.toggle("hidden");
  for (let i = 0; i < navbarLines.length; i++) {
    navbarLines[i].classList.toggle("navbar-cross");
  }
  for (let i = 0; i < navbarListItem.length; i++) {
    navbarListItem[i].classList.toggle("hidden");
  }
}

navbarButton.addEventListener("click", () => {
  navbarOpenClose();
});

window.addEventListener("click", function (e) {
  if (
    !navbarList.classList.contains("hidden") &&
    !(e.target === navbarList) &&
    !(e.target === navbarButton)
  ) {
    navbarOpenClose();
  }
});
