"use strict";

if (window.innerWidth > 1050) {
  const buttons = document.querySelectorAll(".button");
  const buttonsCircles = document.querySelectorAll(".button__arrow-block");
  const buttonsArrows = document.querySelectorAll(".button__arrow");

  function temporaryTransition(circle, arrow) {
    circle.style.transition = `transform 0.1s ease`;
    arrow.style.transition = `transform 0.1s ease`;
    setTimeout(() => {
      circle.style.transition = `none`;
      arrow.style.transition = `none`;
    }, 100);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onmousemove = function (e) {
      let cursor = e.target.closest(".button");

      let cursorCoords = cursor.getBoundingClientRect();
      let xCoord = e.clientX - cursorCoords.left - buttons[i].scrollWidth * 0.5;
      let yCoord = e.clientY - cursorCoords.top - buttons[i].scrollHeight * 0.5;

      buttonsCircles[i].style.transform = `translate(${xCoord * 0.1}px, ${
        yCoord * 0.1
      }px)`;
      buttonsArrows[i].style.transform = `translate(${xCoord * 0.15}px, ${
        yCoord * 0.15
      }px)`;
    };

    buttons[i].addEventListener("mouseenter", () => {
      temporaryTransition(buttonsCircles[i], buttonsArrows[i]);
    });

    buttons[i].addEventListener("mouseleave", () => {
      temporaryTransition(buttonsCircles[i], buttonsArrows[i]);
      buttonsCircles[i].style.transform = `translate(0, 0)`;
      buttonsArrows[i].style.transform = `translate(0, 0)`;
    });
  }
}
