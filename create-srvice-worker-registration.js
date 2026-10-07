const { CACHE_NAME } = require("./constants");

module.exports = () => `
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .catch(error => {
          console.error('The system cannot register Service Worker', error);
        });
    });
  }
`;
