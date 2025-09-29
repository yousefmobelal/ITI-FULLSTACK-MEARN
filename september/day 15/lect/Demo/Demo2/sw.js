const filesToCache = ["index.html", "CSS/main.css", "page1.html"];

const staticDB = "Pages";
self.addEventListener("install", (event) => {
  console.log("service worker installing....", event);
  event.waitUntil(
    caches
      .open(staticDB)
      .then((db) => {
        return db.addAll(filesToCache);
      })
      .catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker activating....");
});

self.addEventListener("fetch", (event) => {
  /**
   * case offline
   * request page----not in cache ---->
   * (custome page working offline, anchor tag ---index.html)
   *
   *
   * case online
   * request wrong url---server rturn error 404
   * custome page wrong URL---anchor--->index.html
   */
  console.log("Fetching request....", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          console.log("found request in cache", event.request.url);
          return response;
        }
        console.log("network request", event.request.url);
        return fetch(event.request);
      })
      .catch((err) => console.log(err))
  );
});
