"use strict";

const card = document.querySelectorAll(".card");
const cardTextWrapper = document.querySelectorAll(".card__text-wrapper");
const cardText = document.querySelectorAll(".card__text");

let cardTextHeight = [];

for (let i = 0; i < cardText.length; i++) {
  cardTextHeight.push(cardText[i].scrollHeight);
  cardTextWrapper[i].style.height = `0px`;
}
if (window.innerWidth > 767) {
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseenter", () => {
      cardTextWrapper[i].style.height = `${cardTextHeight[i]}px`;
      cardTextWrapper[i].style.opacity = "1";
    });
    card[i].addEventListener("mouseleave", () => {
      cardTextWrapper[i].style.height = `0px`;
      cardTextWrapper[i].style.opacity = "0";
    });
  }
}
