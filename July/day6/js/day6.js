var http = new XMLHttpRequest();
var imageSlider = document.querySelector("#imageSlider");
var imageTitle = document.querySelector("#imageTitle");
var previousButton = document.querySelector("#previousButton");
var nextButton = document.querySelector("#nextButton");
var stopButton = document.querySelector("#stopButton");
var playButton = document.querySelector("#playButton");
var speed1Button = document.querySelector("#speed1Button");
var speed2Button = document.querySelector("#speed2Button");
var speed3Button = document.querySelector("#speed3Button");
var albums;
var sliderId;
var currentSliderIndex = 0;

http.open("GET", "https://fakestoreapi.com/products/", false);
http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    albums = JSON.parse(http.responseText);
  }
};

http.send();
console.log(albums);
changeImageAndTitle(0);

function playSlider(numberOfSeconds) {
  if (sliderId) {
    stopSlider();
  }
  var speedInMilliSeconds;
  console.log(numberOfSeconds);
  if (isNaN(numberOfSeconds)) {
    speedInMilliSeconds = 3000;
  } else {
    speedInMilliSeconds = numberOfSeconds * 1000;
  }
  sliderId = setInterval(() => {
    changeImageAndTitle(currentSliderIndex);
    currentSliderIndex++;
    if (currentSliderIndex == albums.length) currentSliderIndex = 0;
  }, speedInMilliSeconds);
}

function stopSlider() {
  clearInterval(sliderId);
}

function showNextImage() {
  currentSliderIndex++;
  if (currentSliderIndex == albums.length) currentSliderIndex = 0;
  changeImageAndTitle(currentSliderIndex);
}

function showPreviousImage() {
  currentSliderIndex--;
  if (currentSliderIndex == 0) currentSliderIndex = albums.length - 1;

  changeImageAndTitle(currentSliderIndex);
}

function changeImageAndTitle(index) {
  imageSlider.src = albums[index].image;
  imageTitle.innerText = albums[index].title;
}

function setSpeedOfSliderTo1() {
  playSlider(6);
}
function setSpeedOfSliderTo2() {
  playSlider(4);
}
function setSpeedOfSliderTo3() {
  playSlider(2);
}

previousButton.addEventListener("click", showPreviousImage);
nextButton.addEventListener("click", showNextImage);
stopButton.addEventListener("click", stopSlider);
playButton.addEventListener("click", playSlider);
speed1Button.addEventListener("click", setSpeedOfSliderTo1);
speed2Button.addEventListener("click", setSpeedOfSliderTo2);
speed3Button.addEventListener("click", setSpeedOfSliderTo3);
