const inputs = document.querySelectorAll(".controls input");

function updateVars(e) {
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + `${this.dataset.sizing || ""}`
  );
}

inputs.forEach((item) => {
  item.addEventListener("change", updateVars);
  item.addEventListener("mousemove", updateVars);
});
