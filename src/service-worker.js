/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// Precarga la app
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerNavigationRoute('/index.html');

workbox.googleAnalytics.initialize();

workbox.routing.registerRoute(/^https?:\/\/www.themealdb.com\/api\/.*/,
    new workbox.strategies.StaleWhileRevalidate(), 
    'GET');


    workbox.routing.registerRoute(
        /^https?:\/\/www.themealdb.com\/images\/.*/,
        new workbox.strategies.CacheFirst({
          cacheName: 'image-cache',
          plugins: [
            new workbox.expiration.Plugin({
              maxAgeSeconds: 7 * 24 * 60 * 60,
              maxEntries: 20
            })
          ]
        })
      )

// a register route for the google fonts API
workbox.routing.registerRoute(
    /^https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/,
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
    'GET'
  );
// a register route for images using cache first strategy


workbox.routing.registerRoute(/^http?.*/,
    new workbox.strategies.NetworkFirst(), 
    'GET');