window.addEventListener("load", (event) => {
  navigator.serviceWorker
    .register("sw.js")
    .then((reg) => console.log("service worker registered successfully"))
    .catch((err) => {
      console.log(err);
    });
});

if (!(Notification in window)) {
  console.log("Notification not supported");
}

Notification.requestPermission((status) => {
  console.log("Notification Permission", status);
});

document.getElementById("btn").onclick = function () {
  navigator.serviceWorker.getRegistration().then((reg) => {
    const options = {
      body: "Any message",
    };
    reg.showNotification("Hello World", options);
  });
};
