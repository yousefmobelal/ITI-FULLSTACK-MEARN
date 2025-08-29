var locationBtn = document.querySelector("#locationBtn");

locationBtn.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(function (position) {
    open(
      "https://www.google.com/maps/@" +
        position.coords.latitude +
        "," +
        position.coords.longitude
    );
  });
});
