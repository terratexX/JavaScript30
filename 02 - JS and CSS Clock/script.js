const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime() {
  let time = new Date();
  let secDeg = (time.getSeconds() / 60) * 360 + 90;
  let minDeg = (time.getMinutes() / 60) * 360 + 90;
  let hourDeg = (time.getHours() / 12) * 360 + 90;

  secHand.style.rotate = `${secDeg}deg`;
  minHand.style.rotate = `${minDeg}deg`;
  hourHand.style.rotate = `${hourDeg}deg`;
}

setInterval(setTime, 1000);
setTime();
