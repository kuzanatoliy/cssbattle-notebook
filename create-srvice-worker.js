const { CACHE_NAME } = require("./constants");

module.exports = () => `
  self.addEventListener("install", function (event) {
    event.waitUntil(caches.open('${CACHE_NAME}').then(() => self.skipWaiting()));
  });

  self.addEventListener("activate", function (event) {
    event.waitUntil(
      caches
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== '${CACHE_NAME}') {
                return caches.delete(cacheName);
              }
            }),
          );
        })
        .then(() => self.clients.claim()),
    );
  });

  self.addEventListener("fetch", function (event) {
    if (event.request.method !== "GET") {
      return;
    }

    event.respondWith(
      caches.match(event.request).then(function (cachedResponse) {      
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then(response => {
          const clonedResponse = response.clone();
          caches.open('${CACHE_NAME}').then((cache) => cache.put(event.request, clonedResponse));
          return response;
        });
      }),
    );
  });
`;
