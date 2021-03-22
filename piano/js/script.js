const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');

function playAudio(src) {
  const audio = new Audio();
  const clone = audio.cloneNode();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
  clone.src = src;
  clone.currentTime = 0;
  clone.play();
}

piano.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/music/${note}.mp3`;
    playAudio(src);
  }      
});

piano.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) {
    pianoКeys.forEach((elem) => {
      elem.classList.contains('piano-key-active'); 
      setTimeout(()=> elem.classList.remove('piano-key-active'),1000);
    });
    event.target.classList.add('piano-key-active');
  }
});

window.addEventListener('keydown', playSound);
function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if(!audio)return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('piano-key-active');
  setTimeout(()=>key.classList.remove('piano-key-active'),500);
}

let btnActive = document.getElementById('btn__active');
btnActive.classList.add('activenote');
let btn__note = document.querySelector('.activenote');
btn__note.addEventListener('click', func);
function func(){
  btn__letters.style.display = 'block';
  btn__letters.style.backgroundColor = '#515961';
  btn__note.style.display = 'block';
  btn__note.style.backgroundColor = '#00c9b7';
  btn__note.style.color = '#fff';
  let noteletter = document.querySelectorAll('.piano-key');
  for (let i=0;i<noteletter.length;i++){
    noteletter[i].classList.remove('noteletter');
  }
}

let addbtn = document.getElementById('btn__letters');
addbtn.classList.add('letters');
let btn__letters = document.querySelector('.letters');
btn__letters.addEventListener('click', letter);
function letter(){
  btn__letters.style.display = 'block';
  btn__letters.style.backgroundColor = '#00c9b7';
  btn__note.style.display = 'block';
  btn__note.style.backgroundColor = '#515961';
  btn__note.style.color = '#fff';
  let noteletter = document.querySelectorAll('.piano-key');
  for (let i=0;i<noteletter.length;i++){
    noteletter[i].classList.add('noteletter');
  }
}

let flscreen = document.querySelector('.fullscreen');
flscreen.addEventListener('click', toggleScreen);
function toggleScreen(){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
  }
  else{
    if(document.fullscreenEnabled){
      document.exitFullscreen();
    }
  }
}



