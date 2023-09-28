window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const box = document.querySelector(".box");

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  box.innerHTML = e.results[0][0].transcript;
  console.log(e.results[0][0].transcript);
}
