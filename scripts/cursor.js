"use strict";
if (window.innerWidth > 992) {
  let cursorType = "default";

  const cursor = document.querySelector(".cursor");
  const cursorImage = document.querySelector(".cursor__image");
  const cursorElements = document.querySelectorAll(".cc-block");
  let x = 0;
  let y = 0;

  for (let i = 0; i < cursorElements.length; i++) {
    cursorElements[i].addEventListener("mouseenter", () => {
      if (cursorElements[i].getAttribute("data-cursor") === "google") {
        cursorImage.setAttribute("src", "./images/cursor-google.svg");
      } else if (cursorElements[i].getAttribute("data-cursor") === "facebook") {
        cursorImage.setAttribute("src", "./images/cursor-facebook.svg");
      } else {
        cursorImage.setAttribute("src", "./images/arrow.svg");
      }

      if (cursorType !== "swipe") {
        cursor.classList.remove("hidden");
        document.body.style.cursor = "none";
      }
    });
    cursorElements[i].addEventListener("mouseleave", () => {
      cursor.classList.add("hidden");
      document.body.style.cursor = "auto";
    });
  }

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = `${e.clientX - 37.5}px`;
    cursor.style.top = `${e.clientY - 37.5}px`;
    x = e.clientX;
    y = e.clientY;
  });

  document.addEventListener("scroll", function (e) {
    if (document.elementFromPoint(x, y).closest(".cc-block")) {
      cursor.classList.remove("hidden");
      document.body.style.cursor = "none";
    } else {
      cursor.classList.add("hidden");
      document.body.style.cursor = "auto";
    }
  });

  const cursorDrag = document.querySelector(".cursor-drag");

  testimonialsSwiper.on("touchStart", () => {
    cursor.classList.add("hidden");
    cursorDrag.classList.remove("hidden");
    document.body.style.cursor = "none";
    cursorType = "swipe";
  });

  testimonialsSwiper.on("touchEnd", () => {
    cursor.classList.remove("hidden");
    cursorDrag.classList.add("hidden");
    cursorType = "default";
  });

  (function () {
    gsap.set(cursorDrag, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
    });
    document.addEventListener("pointermove", movecursor);
    function movecursor(e) {
      gsap.to(cursorDrag, {
        duration: 0.01,
        x: e.clientX,
        y: e.clientY,
      });
    }
  })();
}
