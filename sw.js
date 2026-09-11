// Service Worker for Vaa Macha Vettiya Irukala PWA Caching

const CACHE_NAME = 'vaa-macha-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './js/app.js',
  './js/store/appStore.js',
  './js/services/pdfExport.js',
  './js/services/universitiesData.js',
  './js/db/madrasUniversity.js',
  './js/db/annaUniversity.js',
  './js/db/vtuUniversity.js',
  './js/db/jntuUniversity.js',
  './js/db/mumbaiUniversity.js',
  './js/db/autonomousUniversity.js',
  './js/db/questionBanks.js',
  './js/db/sampleSyllabi.js',
  './js/db/dbRegistry.js',
  './js/components/AiAssistant.js',
  './js/components/YoutubeMatcher.js',
  './js/components/ExamQuestionBank.js',
  './js/components/NotesGenerator.js',
  './js/components/AssignmentCopilot.js',
  './js/components/ProductivityTools.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
