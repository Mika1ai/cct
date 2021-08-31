"use strict";

if (window.innerWidth > 1050) {
	const cursorBlock = document.querySelector(".cursor-block");


  const cursor = document.querySelector(".cursor");
  const cursorImage = document.querySelector(".cursor__image");
	const cursorElements = document.querySelectorAll(".cc-block");
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

      if (cursorType !== "swipe") {
        cursor.classList.remove("hidden");
      }
    });
    cursorElements[i].addEventListener("mouseleave", () => {
      cursor.classList.add("hidden");
    });
  }

  document.addEventListener("mousemove", function (e) {
    // cursor.style.left = `${e.clientX - 37.5}px`;
    // cursor.style.top = `${e.clientY - 37.5}px`;
    x = e.clientX;
    y = e.clientY;
  });

	document.addEventListener("scroll", () => {
		if(document.elementFromPoint(x, y) !== null) {
			if (document.elementFromPoint(x, y).closest(".cc-block")) {
				cursor.classList.remove("hidden");
				// document.body.style.cursor = "none";
			} else {
				cursor.classList.add("hidden");
				// document.body.style.cursor = "auto";
			}
		}
  });

  const cursorDrag = document.querySelector(".cursor-drag");

  testimonialsSwiper.on("touchStart", () => {
    cursor.classList.add("hidden");
    cursorDrag.classList.remove("hidden");
    // document.body.style.cursor = "none";
    cursorType = "swipe";
  });

  testimonialsSwiper.on("touchEnd", () => {
    cursor.classList.remove("hidden");
    cursorDrag.classList.add("hidden");
    cursorType = "default";
  });

  // (function () {
  //   gsap.set(cursorDrag, {
  //     xPercent: -50,
  //     yPercent: -50,
  //     scale: 1,
  //   });
  //   document.addEventListener("pointermove", movecursor);
  //   function movecursor(e) {
  //     gsap.to(cursorDrag, {
  //       duration: 0.000001,
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   }
	// })();
	
	(function () {
    gsap.set(cursorBlock, {
      xPercent: -50,
      yPercent: -50,
      scale: 1,
    });
    document.addEventListener("pointermove", movecursor);
    function movecursor(e) {
      gsap.to(cursorBlock, {
        duration: 0.000001,
        x: e.clientX,
        y: e.clientY,
      });
    }
  })();
}
