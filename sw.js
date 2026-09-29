self.addEventListener('install', (e) => {
  console.log('App instalado com sucesso!');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
