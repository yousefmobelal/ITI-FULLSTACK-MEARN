$(document).ready(function () {
  $("div").animate(
    {
      left: "300px",
      width: "+=150px",
      height: "+=150px",
    },
    2000,
    moveDown
  );
});

function moveDown() {
  $(this).css("background-color", "blue").animate(
    {
      top: "300px",
      width: "-=150px",
      height: "-=150px",
    },
    2000,
    moveLeft
  );
}

function moveLeft() {
  $(this).css("background-color", "chocolate").animate(
    {
      left: "-=300px",
      top: "300px",
      width: "+=150px",
      height: "+=150px",
    },
    2000,
    moveUp
  );
}

function moveUp() {
  $(this)
    .css("background-color", "green")
    .animate(
      {
        top: "-=300px",
        width: "-=150px",
        height: "-=150px",
      },
      2000,
      function () {
        $(this).css("background-color", "red");
      }
    );
}
