var eye1 = document.querySelector("#path2996");
var eye2 = document.querySelector("#path2996-2");
var mouth = document.querySelector("#path3898");
var face = document.querySelector("#path3784");

function changeFillOnHover(el, color) {
  var original = el.style.fill;
  el.addEventListener("mouseover", function () {
    el.style.fill = color;
  });
  el.addEventListener("mouseout", function () {
    el.style.fill = original;
  });
}

function changeStrokeOnHover(el, color) {
  var original = el.style.stroke;
  el.addEventListener("mouseover", function () {
    el.style.stroke = color;
  });
  el.addEventListener("mouseout", function () {
    el.style.stroke = original;
  });
}

changeFillOnHover(eye1, "red");
changeFillOnHover(eye2, "green");
changeStrokeOnHover(face, "yellow");
changeStrokeOnHover(mouth, "blue");
