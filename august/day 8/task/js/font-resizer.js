$(document).ready(function () {
  $("#increase").click(onIncrease);
  $("#decrease").click(onDecrease);
});

function onIncrease() {
  var currentFontSize = parseInt($(".content").css("font-size"));
  console.log(currentFontSize);
  if (currentFontSize === 30) {
    $("p.error").text("You've reached the maximum value");
  } else {
    var newFontSize = currentFontSize + 2;
    console.log(newFontSize);
    $(".content").css("font-size", newFontSize);
  }
}

function onDecrease() {
  var currentFontSize = parseInt($(".content").css("font-size"));
  if (currentFontSize === 30) {
    $("p.error").empty();
  }
  if (currentFontSize === 10) {
    $("p.error").text("You've reached the minimum value");
  } else {
    var newFontSize = currentFontSize - +2;
    console.log(newFontSize);
    $(".content").css("font-size", newFontSize);
  }
}
