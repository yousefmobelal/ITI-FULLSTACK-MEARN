var video = document.querySelector("video");
var videoProgress = document.querySelector("#videoProgress");
var playBtn = document.querySelector("#playBtn");
var stopBtn = document.querySelector("#stopBtn");
var muteBtn = document.querySelector("#mute");
var unmuteBtn = document.querySelector("#unmute");
var volumeRange = document.querySelector("#soundVolume");
var videosPlaylist = document.querySelector("#playlistVideos");

var firstVideoUrl = "";
var firstVideoPoster = "";
var playingVideoIndex = 0;
var videosInPlaylist = [
  {
    id: 0,
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
  },
  {
    id: 1,
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
  },
  {
    id: 2,
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    poster:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
  },
];

function initializePlaylist() {
  for (var element of videosInPlaylist) {
    var imageSection = document.createElement("section");
    var imageElement = document.createElement("img");
    imageElement.src = element.poster;
    imageElement.className = "playlistVideoPoster";
    var imageTitle = document.createElement("h2");
    imageTitle.id = "playlistImage" + element.id;
    imageSection.append(imageElement);
    imageSection.append(imageTitle);
    console.log(element);
    videosPlaylist.append(imageSection);
  }
}

initializePlaylist();

video.addEventListener("loadedmetadata", function () {
  videoProgress.setAttribute("max", video.duration);
  videoProgress.setAttribute("value", video.currentTime);
  firstVideoUrl = video.getAttribute("src");
  firstVideoPoster = video.getAttribute("poster");
});

video.addEventListener("timeupdate", function (event) {
  videoProgress.setAttribute("value", event.target.currentTime);

  if (playingVideoIndex === videosInPlaylist.length) {
    playingVideoIndex = 0;
  }
  if (event.target.currentTime === video.duration) {
    playingVideoIndex++;

    video.src = videosInPlaylist[playingVideoIndex].url;
    video.poster = videosInPlaylist[playingVideoIndex].poster;
    video.load();
  }
});

playBtn.addEventListener("click", function () {
  video.play();
});
stopBtn.addEventListener("click", function () {
  video.pause();
});

muteBtn.addEventListener("click", function () {
  video.muted = true;
});

unmuteBtn.addEventListener("click", function () {
  video.muted = false;
});

volumeRange.addEventListener("change", function (event) {
  video.volume = volumeRange.value / 100;
});
