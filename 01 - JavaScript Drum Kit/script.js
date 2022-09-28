window.addEventListener("keydown", playAudio);
window.addEventListener("keydown", addTransform);
window.addEventListener("keyup", removeTransform);

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

function addTransform(e) {
  const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!keyPressed) {
    return;
  }
  keyPressed.classList.add("playing");
}

function removeTransform(e) {
  const keyPressed = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!keyPressed) {
    return;
  }
  keyPressed.classList.remove("playing");
}
