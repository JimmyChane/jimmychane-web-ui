// TODO: test
export async function uninstallAppSw() {
  if (!('serviceWorker' in navigator)) return;

  window.addEventListener('load', async () => {
    const regs = await navigator.serviceWorker.getRegistrations().catch((error: Error) => error);
    if (regs instanceof Error) {
      console.error('Service worker get registrations failed: ', regs);
      return;
    }

    for (const reg of regs) {
      const result = await reg.unregister().catch((e: Error) => e);
      if (result instanceof Error) {
        console.error('Service worker unregistering failed: ', result);
      }
    }

    await clearAppCache();
    // location.reload();
  });
}

// TODO: test
export async function clearAppCache() {
  if (!('caches' in window)) return;

  const cacheNames = await caches.keys().catch((error: Error) => error);
  if (cacheNames instanceof Error) {
    console.error('Error while clearing caches: ', cacheNames);
    return;
  }

  Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
}

// TODO: test
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
