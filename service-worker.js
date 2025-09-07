
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('radio-fama-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        'https://i.postimg.cc/3rsF6tJr/1754598461884.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
