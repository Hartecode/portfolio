// polyfill is used for lack of suppert in browser
importScripts('/cache-polyfill.js');

const cacheName = 'v1';

// const cacheAssests = [
//   'index.html',
//   'js/index.js',
//   'js/paper-full.js',
//   'css/index.css',
//   'pic/babysteps.png',
//   'pic/bioPic.jpg'
// ];

// call install event
self.addEventListener('install', e => {
  console.log('Service worker installed');

  // e.waitUntil(
  //   caches
  //     .open(casheName)
  //     .then( cache => {
  //       console.log('Service Worker: Caching Files')
  //       cache.addAll(cacheAssests);
  //     })
  //     .then(() => self.skipWaiting())
  // );
})

// call activate event
self.addEventListener('activate', e => {
  console.log('Service worker active');
  // Remove unwanted cashes
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service worker: cleared old cashe');
            return caches.delete(cache);
          }
        })
      );
    })
  );
})

// call fetch event
self.addEventListener('fetch', (e) => {
  console.log('Service Worker: Fetch');
  e.respondWith(
    fetch(e.request)
    .then(res => {
      // make copy clone
      const resClone = res.clone();
      // open cache
      caches.open(cacheName).then(cache => {
        // add response to cashe
        cache.put(e.request, resClone);
      });
      return res;
    })
    .catch(err => caches.match(e.request).then(res => res)));
});