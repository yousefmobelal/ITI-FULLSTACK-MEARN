const filesToCache = [
  "index.html",
  "css/main.css",
  "css/page1.css",
  "css/offline.css",
  "css/not_found.css",
  "pages/page1.html",
  "pages/offline.html",
  "pages/not_found.html",
];

const staticDB = "Files";

self.addEventListener("install", (event) => {
  console.log("installing is working", event);
  event.waitUntil(
    caches
      .open(staticDB)
      .then((cache) => cache.addAll(filesToCache))
      .catch((err) => {
        console.log(`Error happened while installing: ${err}`);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker is Activating");
});

self.addEventListener("fetch", (event) => {
  console.log(`Request from: ${event.request.url}`);
  const requestURL = new URL(event.request.url);

  if (requestURL.protocol !== "http:" && requestURL.protocol !== "https:") {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || networkResponse.status === 404) {
            return caches.match("pages/not_found.html");
          }
          const responseClone = networkResponse.clone();
          console.log(`Cloning new data to cache`);
          caches.open(staticDB).then((cache) => {
            console.log(`Adding new data to cache`);
            cache.put(event.request, responseClone);
          });
          return networkResponse;
        })
        .catch(() => {
          return caches.match("pages/offline.html");
        });
    })
  );
});
