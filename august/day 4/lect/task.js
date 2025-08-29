var redRange = document.querySelector("#redRange");
var blueRange = document.querySelector("#blueRange");
var greenRange = document.querySelector("#greenRange");
var text = document.querySelector("#textToChangeColor");

var red = 0;
var green = 0;
var blue = 0;

redRange.addEventListener("change", function (event) {
  var redValue = event.target.value;
  console.log(redValue);
  text.style.color = `rgb(${redValue}, ${green}, ${blue})`;
});

greenRange.addEventListener("change", function (event) {
  var greenValue = event.target.value;
  console.log(greenValue);
  text.style.color = `rgb(${red}, ${greenValue}, ${blue})`;
});

blueRange.addEventListener("change", function (event) {
  var blueValue = event.target.value;
  console.log(blueValue);
  text.style.color = `rgb(${blueValue}, ${green}, ${blueValue})`;
});
