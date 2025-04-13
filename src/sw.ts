// experiment

export async function uninstallServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    const regs = await navigator.serviceWorker.getRegistrations().catch((error: Error) => error);
    if (regs instanceof Error) {
      console.error('Service worker get registrations failed: ', regs);
      return;
    }

    if (!regs.length) return;

    const promises = regs.map((reg) => reg.unregister());
    const results = await Promise.all(promises).catch((error: Error) => error);
    if (results instanceof Error) {
      console.error('Service worker unregistering failed: ', results);
      return;
    }

    await clearCache();
    // location.reload();
  });
}

export async function clearCache() {
  if (!('caches' in window)) return;

  const cacheNames = await caches.keys().catch((error: Error) => error);
  if (cacheNames instanceof Error) {
    console.error('Error while clearing caches: ', cacheNames);
    return;
  }

  Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
}

export async function clearSwCache() {
  if (!('serviceWorker' in navigator)) return;
  if (!('caches' in window)) return;

  window.addEventListener('load', async () => {
    const regs = await navigator.serviceWorker.getRegistrations().catch((error: Error) => error);
    if (regs instanceof Error) {
      console.error('Service worker get registrations failed: ', regs);
      return;
    }

    if (!regs.length) return;

    const cacheNames = await caches.keys().catch((error: Error) => error);
    if (cacheNames instanceof Error) {
      console.error('Error while clearing caches: ', cacheNames);
      return;
    }

    Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  });
}
