// ══════════════════════════════════════════════════════════════════
//  Service Worker — রেস্টুরেন্ট হিসাব PWA
//  Cache-first strategy for offline support + install prompt
// ══════════════════════════════════════════════════════════════════

const CACHE_NAME = "restaurant-tracker-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

// Install — cache all assets
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — delete old caches
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// Fetch — cache first, network fallback
self.addEventListener("fetch", (e) => {
  // Skip non-GET and cross-origin requests (like Google Fonts, Apps Script)
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      return (
        cached ||
        fetch(e.request).then((res) => {
          // Cache new local resources
          if (res.ok) {
            const resClone = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(e.request, resClone));
          }
          return res;
        })
      );
    })
  );
});
