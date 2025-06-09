// for playlist
class MusicPlayer {
  constructor(
    songNameElement,        // element to display the song name
    composerNameElement,    // element to display the composer name
    songImageElement,       // element to display the song image
    audioControl,           // audio control element
    audioControlSource      // audio control source element
    ) {
    this.songs = [];        // array to store the songs
    this.songIndex = 0;     // index of the song that is currently loaded

    this.songNameElement = songNameElement;           // reference to the song name element
    this.composerNameElement = composerNameElement;   // reference to the composer name element
    this.songImageElement = songImageElement;         // reference to the song image element
    this.audioControl = audioControl;                 // reference to the audio control element
    this.audioControlSource = audioControlSource;     // reference to the audio control source element
  }

  addSong(song) {
    this.songs.push(song);  // add a new song to the songs array
  }

  loadSongAtIndex(i) {
    this.songNameElement.innerHTML = songs[i].songName;           // display the song name
    this.composerNameElement.innerHTML = songs[i].composer;       // display the composer name
    this.songImageElement.src = "music/" + songs[i].albumCover;   // set the image source
    this.audioControlSource.src = "music/" + songs[i].fileName;   // set the audio source
    this.audioControl.load();                                     // load the audio
  }

  nextSong() {
    // increase the song index
    ++this.songIndex;                                
    // if it exceeds the number of songs in the array, reset back to the first song so it becomes a continuous loop
    if (this.songIndex >= this.songs.length) {      
      this.songIndex = 0;
    }
    // load the next song
    this.loadSongAtIndex(this.songIndex);           
  }

  prevSong() {        
    // decrease the song index                               
    --this.songIndex;        
    // if it goes below zero (the user is on the first song and trying to press the back button), set it back to the last song                       
    if (this.songIndex < 0) {                      
      this.songIndex = this.songs.length - 1;
    }
    // load the previous song
    this.loadSongAtIndex(this.songIndex);
  }
}

// array of songs
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

// variable to hold the instance of the musicPlayer class
let musicPlayer;

function loadMusicPlayer() {
  musicPlayer = new MusicPlayer(
    document.querySelector("#song-name"),             // get the song name element
    document.querySelector("#composer-name"),         // get the composer name element
    document.querySelector("#song-image"),            // get the song image element
    document.getElementById("audio-control"),         // get the audio control element
    document.getElementById("audio-control-source")   // get the audio control source element
  )

  // add each song to the musicPlayer instance
  for (let i = 0; i < songs.length; i++) {
    musicPlayer.addSong(songs[i]);
  }

  // load the first song
  musicPlayer.loadSongAtIndex(0);

  // add event listeners to the previous and next buttons
  document.getElementById("prev-button").addEventListener("click", prevButtonPressed);
  document.getElementById("next-button").addEventListener("click", nextButtonPressed);
}

function prevButtonPressed() {
  // call the prevSong method of the musicPlayer instance
  musicPlayer.prevSong();
}

function nextButtonPressed() {
  // call the nextSong method of the musicPlayer instance
  musicPlayer.nextSong();
}

// execute the loadMusicPlayer function when the DOM content has loaded
window.addEventListener('DOMContentLoaded', (event) => {
  loadMusicPlayer();
});

// ratings for entertainment page
document.addEventListener("DOMContentLoaded", function() {
  const ratings = document.querySelectorAll(".rating");
  
  ratings.forEach(ratingDiv => {
    const ratingValue = parseFloat(ratingDiv.getAttribute("data-rating"));
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    
    let starsHTML = "";
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML += "<i class='fas fa-star'></i>";
    }
    
    // Half star
    if (hasHalfStar) {
      starsHTML += "<i class='fas fa-star-half-alt'></i>";
    }
    
    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += "<i class='far fa-star'></i>";
    }
    
    ratingDiv.innerHTML = starsHTML;
  });
});

// flip card on click
document.addEventListener("DOMContentLoaded", function() {
  const flipContainers = document.querySelectorAll(".flip-container");
  
  flipContainers.forEach(container => {
    container.addEventListener("click", function(e) {
      e.stopPropagation(); // prevent other interactions
      container.classList.toggle("flipped");
    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".mundane");
  const images = document.querySelectorAll(".mundane img");
  let index = 0;

  function showNextImage() {
    index = (index + 1) % images.length;
    gallery.style.transform = `translateX(-${index * 100}%)`;
  }

  // Example: rotate every 4 seconds
  setInterval(showNextImage, 4000);
});

// special events
