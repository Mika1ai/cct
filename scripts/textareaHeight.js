function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = element.scrollHeight + "px";
}

const textArea = document.querySelector(".quote__form-textarea");

textArea.addEventListener("input", () => {
  textAreaAdjust(textArea);
});
