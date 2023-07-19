class MusicPlayer {
  constructor(
    songNameElement,
    composerNameElement,
    songImageElement,
    audioControl,
    audioControlSource
    ) {
    this.songs = [];
    this.songIndex = 0;

    this.songNameElement = songNameElement;
    this.composerNameElement = composerNameElement;
    this.songImageElement = songImageElement;
    this.audioControl = audioControl;
    this.audioControlSource = audioControlSource;
  }

  addSong(song) {
    this.songs.push(song);
  }

  loadSongAtIndex(i) {
    this.songNameElement.innerHTML = songs[i].songName;
    this.composerNameElement.innerHTML = songs[i].composer;
    this.songImageElement.src = "music/" + songs[i].albumCover;
    this.audioControlSource.src = "music/" + songs[i].fileName;
    this.audioControl.load();
  }

  nextSong() {
    ++this.songIndex;
    if (this.songIndex >= this.songs.length) {
      this.songIndex = 0;
    }
    this.loadSongAtIndex(this.songIndex);
  }

  prevSong() {
    --this.songIndex;
    if (this.songIndex < 0) {
      this.songIndex = this.songs.length - 1;
    }
    this.loadSongAtIndex(this.songIndex);
  }
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

let musicPlayer;

function loadMusicPlayer() {
  musicPlayer = new MusicPlayer(
    document.querySelector("#song-name"),
    document.querySelector("#composer-name"),
    document.querySelector("#song-image"),
    document.getElementById("audio-control"),
    document.getElementById("audio-control-source")
  )
  for (let i = 0; i < songs.length; i++) {
    musicPlayer.addSong(songs[i]);
  }
  musicPlayer.loadSongAtIndex(0);

  document.getElementById("prev-button").addEventListener("click", prevButtonPressed);
  document.getElementById("next-button").addEventListener("click", nextButtonPressed);
}

function prevButtonPressed() {
  musicPlayer.prevSong();
}

function nextButtonPressed() {
  musicPlayer.nextSong();
}
