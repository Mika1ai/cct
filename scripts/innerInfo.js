const textBlock = document.querySelector(".inner-info__text");
const textBlockFirstItem = textBlock.children[0];

if (textBlockFirstItem.tagName === "H2") {
	textBlockFirstItem.style.marginTop = "-100px";
}

if (window.innerWidth > 1050) {
	const navPointBlock = document.querySelector(".inner-info__nav");
	const titles = textBlock.querySelectorAll("h2");
	
	for (let i = 0; i < titles.length; i++) {
		createNavPoint(titles[i].textContent);
	}

	const navPoints = navPointBlock.querySelectorAll("p");

	function createNavPoint(titleName) {
		const navPoint = document.createElement("p");
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
}
