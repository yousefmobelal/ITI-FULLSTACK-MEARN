var boxClasses = ["red", "blue", "green", "orange"];
$(document).ready(function () {
  $("div").hover(hoverIn, hoverOut).click(onClick);
});

function hoverIn() {
  var nextClass = getNextClass.call(this);
  $(this).attr("class", nextClass);
}

function hoverOut() {
  var className = $(this).attr("class");
  var currentClassIndex = boxClasses.indexOf(className);
  var prevClassIndex;
  if (currentClassIndex == 0) {
    prevClassIndex = boxClasses.length - 1;
  } else {
    prevClassIndex = currentClassIndex - 1;
  }
  var prevClass = boxClasses[prevClassIndex];
  $(this).attr("class", prevClass);
}

function onClick() {
  $(this)
    .clone(true)
    .attr("class", function () {
      hoverOut.call(this);
      return getNextClass.call(this);
    })
    .insertAfter(this);
}

function getNextClass() {
  var className = $(this).attr("class");
  var currentClassIndex = boxClasses.indexOf(className);
  var nextClassIndex;
  if (currentClassIndex == boxClasses.length - 1) {
    nextClassIndex = 0;
  } else {
    nextClassIndex = currentClassIndex + 1;
  }
  return boxClasses[nextClassIndex];
}
