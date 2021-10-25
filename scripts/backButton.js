const backButton = document.querySelector(".button--back");

backButton.addEventListener("click", function (e) {
  e.preventDefault();
  history.back();
});
