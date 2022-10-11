const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progressBar = document.querySelector(".progress");
const progress = document.querySelector(".progress__filled");
const playBtn = document.querySelector(".toggle");
const rangeSlider = document.querySelectorAll(".player__slider");
const skipBtn = document.querySelectorAll("[data-skip]");

let tmpVolume = 1;

function togglePlay(e) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateBtn() {
  const btnIcon = this.paused ? "►" : "❚ ❚";
  playBtn.textContent = btnIcon;
}
function sliderUpdate() {
  video[this.name] = this.value;
  if (this.name === "volume") {
    tmpVolume = this.value;
  }
}
function skip() {
  video.currentTime += Number(this.dataset.skip);
}
function progressBarUpdate() {
  const percent = (video.currentTime / this.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}
function changeProgress(e) {
  video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

window.addEventListener("keydown", (e) => {
  //console.log(e.code);
  if (e.code === "Space") togglePlay();
  if (e.code === "ArrowUp" && video.volume < 0.99) {
    video.volume += 0.1;
    rangeSlider[0].value = video.volume;
    tmpVolume = video.volume;
  }
  if (e.code === "ArrowDown" && video.volume > 0.1) {
    video.volume -= 0.1;
    rangeSlider[0].value = video.volume;
    tmpVolume = video.volume;
  }
  if (e.code === "ArrowRight" && video.playbackRate < 2) {
    video.playbackRate += 0.1;
    rangeSlider[1].value = video.playbackRate;
  }
  if (e.code === "ArrowLeft" && video.playbackRate > 0.6) {
    video.playbackRate -= 0.1;
    rangeSlider[1].value = video.playbackRate;
  }
  if (e.code === "KeyR") {
    video.playbackRate = 1;
    rangeSlider[1].value = video.playbackRate;
  }
  if (e.code === "KeyM") {
    if (video.volume > 0) {
      video.volume = 0;
      rangeSlider[0].value = video.volume;
    } else {
      video.volume = tmpVolume;
      rangeSlider[0].value = video.volume;
    }
  }
});
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("timeupdate", progressBarUpdate);
video.addEventListener("pause", updateBtn);
playBtn.addEventListener("click", togglePlay);
rangeSlider.forEach((element) => {
  element.addEventListener("change", sliderUpdate);
});
skipBtn.forEach((element) => {
  element.addEventListener("click", skip);
});
progressBar.addEventListener("click", changeProgress);
