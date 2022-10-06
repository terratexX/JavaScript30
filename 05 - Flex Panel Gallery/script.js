function openPanel(e) {
  this.classList.toggle("open");
}
function showText(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("active");
  }
}

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", openPanel);
  panel.addEventListener("transitionend", showText);
});
