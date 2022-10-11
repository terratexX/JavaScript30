const arr = document.querySelectorAll(`.inbox input`);
let lastChecked;

function checkFunction(e) {
  let inBetween = false;
  if (
    e.shiftKey &&
    this.checked &&
    lastChecked != undefined &&
    lastChecked.checked
  ) {
    arr.forEach((element) => {
      if (element === this || element === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        element.checked = true;
      }
    });
  }
  lastChecked = this;
}

arr.forEach((element) => {
  element.addEventListener("click", checkFunction);
});
