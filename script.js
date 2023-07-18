// home page
function loadHomePage() {
}

// Toronto page
function loadTorontoPage() {
}

// art page
function loadArtPage() {
}

// resume page
function loadResumePage() {
}

const songs = [
  {
    songName: "Start Over",
    composer: "Gaho",
    fileName: "Start Over.mp3",
    albumCover: "start over.jpeg"
  },
  {
    songName: "Silence",
    composer: "Marshmello ft.Khalid",
    fileName: "Silence.mp3",
    albumCover: "silence.jpeg"
  },
  {
    songName: "Lovely",
    composer: "Fly By Midnight ft.Betty Who",
    fileName: "Lovely.mp3",
    albumCover: "lovely.jpeg"
  },
  {
    songName: "Just Say Hello",
    composer: "Melo-D",
    fileName: "Just Say Hello.mp3",
    albumCover: "just say hello.jpeg"
  },
  {
    songName: "Different Song For Me",
    composer: "P1Harmony",
    fileName: "Different Song For Me.mp3",
    albumCover: "different song for me.jpeg"
  }
];

let songIndex = 0;

function loadSongAtIndex(i) {
  document.querySelector("#song-name").innerHTML = songs[i].songName;
  document.querySelector("#composer-name").innerHTML = songs[i].composer;
  document.querySelector("#song-image").src = "music/" + songs[i].albumCover;
  document.getElementById("audio-control-source").src = "music/" + songs[i].fileName;
  document.getElementById("audio-control").load();
}

function loadMusicPlayer() {
  loadSongAtIndex(0);

  document.getElementById("prev-button").addEventListener("click", prevButtonPressed);
  document.getElementById("next-button").addEventListener("click", nextButtonPressed);
}

function prevButtonPressed() {
  --songIndex;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  console.log("prev");
  loadSongAtIndex(songIndex);
}

function nextButtonPressed() {
  ++songIndex;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSongAtIndex(songIndex);
}
