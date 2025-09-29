if ("serviceWorker" in navigator) {
  window.addEventListener("load", (event) => {
    navigator.serviceWorker
      .register("../sw.js")
      .then((reg) => {
        console.log("service worker registered successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

installBtn.style.display = "none";

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  if (!window.matchMedia("(display-mode: standalone)").matches) {
    installBtn.style.display = "block";
  }
});

installBtn.addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();

  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response: ${outcome}`);

  deferredPrompt = null;

  installBtn.style.display = "none";
});

window.addEventListener("appinstalled", () => {
  console.log("PWA installed successfully");
});
