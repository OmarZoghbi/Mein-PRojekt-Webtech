if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('Service Worker registriert mit Scope:', registration.scope);
    }).catch(error => {
      console.log('Service Worker Registrierung fehlgeschlagen:', error);
    });
  });
}
