let musicArray = [
  "music/eurythmics-sweet-dreams.mp3",
  "music/se-vos-solo.mp3",
  "music/klan-no-drama.mp3",
  "music/antwan-no-hay-pausa.mp3",
  "music/sank-nueva-piel.mp3",
  "music/sank-animality.mp3",
  "music/sank-ahora-o-nunca.mp3"
];
// etiqueta iframe
let onOf = true;

let imgReproductor = document.querySelector(".img-reproductor");
let previous = document.querySelector(".previous");
let playPause = document.querySelector(".play-pause");
let next = document.querySelector(".next");
let stopM = document.querySelector(".stopM");
let playPauseImg = document.querySelector(".play-pause-img");

let theMusic = document.getElementById("the-music");
let musicPosition = 0;

function playing() {
  if (onOf) {
    onOf = false;
    imgReproductor.src = "bg-move/dog.webp";
    playPauseImg.src = "buttons/pause.svg";
    music();
  } else {
    onOf = true;
    imgReproductor.src = "bg-move/dog.jpg"
    playPauseImg.src = "buttons/play.svg";
    music();
  }
}



let oneTime = true;
function music() {
  if (theMusic.paused && oneTime) {
    theMusic.src = musicArray[musicPosition]
    oneTime = false;
  }
  if (theMusic.paused) {
    theMusic.play();
  }
  else {
    theMusic.pause();
  }
}


function previousAndNext(e) {
  if (!onOf) {
    if (e.target.classList.value === "next" || e.target.alt === "next") {
      if (musicArray[musicPosition] === musicArray[musicArray.length - 1]) {
        musicPosition = 0;
        theMusic.src = musicArray[musicPosition];
        music();
      } else {
        musicPosition++;
        theMusic.src = musicArray[musicPosition];
        music();
      }
    } else if (e.target.classList.value === "previous" || e.target.alt === "previous") {
      if (musicArray[musicPosition] === musicArray[0]) {
        musicPosition = musicArray.length - 1;
        theMusic.src = musicArray[musicPosition];
        music();
      } else {
        musicPosition--;
        theMusic.src = musicArray[musicPosition];
        music();
      }
    }
  }
}

function stopMusic() {
  if (!theMusic.paused) {
    imgReproductor.src = "bg-move/dog.jpg";
    theMusic.pause();
    theMusic.currentTime = 0;
    console.log("apretando")
    onOf = true;
    playPauseImg.src = "buttons/play.svg";
  } else {
    theMusic.currentTime = 0;
  }
}

function authomaticReproduction() {
  if (musicArray[musicPosition] === musicArray[musicArray.length-1]) {
    musicPosition = 0;
    theMusic.src = musicArray[musicPosition];
    music();
  } else {
    musicPosition++;
    theMusic.src = musicArray[musicPosition];
    music();
  }
}

playPause.addEventListener("click", playing);
next.addEventListener("click", previousAndNext);
previous.addEventListener("click", previousAndNext);
stopM.addEventListener("click", stopMusic);
theMusic.addEventListener("ended", authomaticReproduction);
