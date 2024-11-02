const cacheName = 'file-converter-cache-v1';
const assets = [
    '/',
    '/static/style.css',
    '/static/manifest.json',
    '/static/21.png',
    '/static/21.png'
];

// Install Service Worker and cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cache.addAll(assets);
        })
    );
});

// Fetch cached assets when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
