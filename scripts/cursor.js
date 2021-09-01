"use strict";

if (window.innerWidth > 1050) {
	const cursorBlock = document.querySelector(".cursor-block");
	const cursor = document.querySelector(".cursor");
	const cursorDrag = document.querySelector(".cursor-drag");
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
		});
	}
	
	document.addEventListener("pointermove", function (e) {
		cursorBlock.style.left = `${e.clientX - 37.5}px`;
		cursorBlock.style.top = `${e.clientY - 37.5}px`;
		x = e.clientX;
		y = e.clientY;

		if(document.elementFromPoint(x, y) !== null) {
			if (document.elementFromPoint(x, y).closest(".cc-block")) {
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
	});

	document.addEventListener("scroll", () => {
		if(document.elementFromPoint(x, y) !== null) {
			if (document.elementFromPoint(x, y).closest(".cc-block")) {
				cursor.classList.remove("hidden");
			} else {
				cursor.classList.add("hidden");
			}
		}	
	});

  testimonialsSwiper.on("touchStart", () => {
    cursorType = "swipe";
  });
  testimonialsSwiper.on("touchEnd", () => {
    cursorType = "default";
  });
}
