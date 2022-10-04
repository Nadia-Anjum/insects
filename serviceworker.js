const cacheName = "cache-insects";
//når websitet indlæses, cache ressourcer nævnt i liste
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "/insects/",
        "/insects/index.html",
        "/insects/butterflies.jpg",
        "/insects/butterfly.jpg",
        "/insects/dragonfly.jpg",
      ]);
    })
  );
});
//hvis ressource ikke tilgængelig online, så søg på cachen efter et match.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});
