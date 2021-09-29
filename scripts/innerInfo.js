const textBlock = document.querySelector(".inner-info__text");
const textBlockFirstItem = textBlock.children[0];

const articleBlock = document.querySelector(".inner-info__article-block");
const navContainer = document.querySelector(".inner-info__nav-container");

if (textBlockFirstItem.tagName === "H2") {
	textBlockFirstItem.style.marginTop = "-100px";
	navContainer.style.height = `${articleBlock.scrollHeight - 100}px`
} else {
	navContainer.style.height = `${articleBlock.scrollHeight}px`
}

if (window.innerWidth > 1050) {
	const navPointBlock = document.querySelector(".inner-info__nav");
	const titles = [...textBlock.querySelectorAll("h2")];
	
	for (let i = 0; i < titles.length; i++) {
		titles[i].id = `title--${i}`;
		createNavPoint(titles[i].textContent, i);
	}

	const navPoints = [...navPointBlock.querySelectorAll("a")];

	function createNavPoint(titleName, i) {
		const navPoint = document.createElement("a");
		navPoint.setAttribute("href", `#title--${i}`);
		navPoint.textContent = `${titleName}`;
		navPointBlock.appendChild(navPoint);
	}

	for (let i = 0; i < titles.length; i++) {
		navPoints[i].addEventListener("click", function (e) {
			e.preventDefault();

			titles[i].scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}

	//////////////////////////////////////////

	let fromTop;
	let current;
	let id;

	window.addEventListener("scroll", () => {
		fromTop = scrollY + 100;

		current = titles.map(function (title) {	
			if((title.getBoundingClientRect().top +
				window.pageYOffset || document.documentElement.scrollTop) < fromTop) {
				return title;
			}
		});

		current = current.filter(Boolean);
		
		if (current[current.length - 1]) {
			id = (current[current.length - 1].id);
		}

		navPoints.map(function (navPoint) {
			navPoint.classList.remove("active");
			if (navPoint.getAttribute("href") === `#${id}`) {
				navPoint.classList.add("active");
			}
		})
	});

	
}