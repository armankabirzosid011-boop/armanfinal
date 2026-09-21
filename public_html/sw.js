// Service workers are intentionally disabled. The application uses the PHP REST API
// and MySQL as its only business-data source and does not provide offline persistence.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
