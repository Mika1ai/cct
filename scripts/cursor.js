"use strict";


if (window.innerWidth > 1050) {
  const cursorBlock = document.querySelector(".cursor-block");
  const cursor = document.querySelector(".cursor");
  const cursorDrag = document.querySelector(".cursor-drag");
  const cursorImage = document.querySelector(".cursor__image");
  const cursorElements = document.querySelectorAll(".cc-block");
  const cursorSize = 75;
  let cursorType = "default";
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
    });
  }


  function moveCursor(e) {
    x = e.clientX;
    y = e.clientY;
    cursorBlock.style.left = `${x - cursorSize / 2}px`;
    cursorBlock.style.top = `${y - cursorSize / 2}px`;

    const hoveredEl = e.target

    if (hoveredEl !== null) {
      if (hoveredEl.closest(".cc-block")) {
        if (cursorType !== "swipe") {
          cursor.classList.remove("hidden");
          cursorDrag.classList.add("hidden");
        } else {
          cursorDrag.classList.remove("hidden");
          cursor.classList.add("hidden");
        }
      } else {
        cursor.classList.add("hidden");
        cursorDrag.classList.add("hidden");
      }
    }
  }

  function limitExecByInterval(fn, time) {
    let lock, execOnUnlock, args;
    return function () {
      args = arguments;
      if (!lock) {
        lock = true;
        setTimeout(function () {
          lock = false;
          if (execOnUnlock) {
            execOnUnlock = false;
          }
        }, time);
        return fn.apply(this, args);
      } else execOnUnlock = true;
    }
  }

  const limitedMoveCursor = limitExecByInterval(moveCursor, 1000 / 60)
  document.addEventListener("pointermove", (e) => {
    limitedMoveCursor(e);
    // moveCursor(e); if you wanna compare with how it was before just uncomment this line and comment previous
  });

  document.addEventListener("scroll", () => {
    if (document.elementFromPoint(x, y) !== null) {
      if (document.elementFromPoint(x, y).closest(".cc-block")) {
        cursor.classList.remove("hidden");
      } else {
        cursor.classList.add("hidden");
      }
    }
  });

  function swiperTouch(swiper) {
    swiper.on("touchStart", () => {
      cursorType = "swipe";
    });
    swiper.on("touchEnd", () => {
      cursorType = "default";
    });
  }


  if (typeof testimonialsSwiper !== "undefined") {
    swiperTouch(testimonialsSwiper);
  } else if (typeof ppSwiper !== "undefined") {
    swiperTouch(ppSwiper);
  } else if (typeof innerSwiper !== "undefined") {
    swiperTouch(innerSwiper);
  }
}
