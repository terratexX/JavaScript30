const secretKey = "Test69";
const compareArr = [];
function addToArr(e) {
  if (e.key !== "Shift") {
    compareArr.push(e.key);
    console.log(compareArr);
  }
  if (compareArr.length > secretKey.length) {
    compareArr.shift();
  }
  if (compareArr.join("") === secretKey) {
    alert("cheatCode activated");
  }
}

//todo: array.push(add to end) and array.shift(delete first)

window.addEventListener("keydown", addToArr);
