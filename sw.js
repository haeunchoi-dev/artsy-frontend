const cacheName = 'cache';

const precacheResources = ['/', '/index.html'];

// install event
self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

// activate event
self.addEventListener('activate', (e) => {});

// fetch event
self.addEventListener('fetch', (e) => {});
