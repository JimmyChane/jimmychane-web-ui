import { useRegisterSW } from 'virtual:pwa-register/vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export type UseAppPwaOption = { checkOnRoute?: boolean; updateDelayTimeoutMs?: number };

export function useAppPwa(option?: UseAppPwaOption) {
  let timeRegistered: number | undefined = undefined;

  const route = useRoute();
  const isInstalling = ref(false);

  const { needRefresh: isUpdateAvailable, updateServiceWorker } = useRegisterSW({
    immediate: true,
    onRegisteredSW: (_swScriptUrl, registration) => {
      if (registration) {
        timeRegistered = Date.now();

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            isInstalling.value = true;

            const listener = () => {
              if (newWorker.state === 'installed' || newWorker.state === 'activated') {
                isInstalling.value = false;
                newWorker.removeEventListener('statechange', listener);
              }
            };
            newWorker.addEventListener('statechange', listener);
          }
        });
      }
    },
    onNeedRefresh: () => {
      isInstalling.value = false;

      const updateDelayTimeoutMs = option?.updateDelayTimeoutMs ?? 0;
      if (updateDelayTimeoutMs > 0) {
        const timeRegisteredElapsed = timeRegistered ? Date.now() - timeRegistered : 0;
        if (timeRegisteredElapsed < 3000) updateThenRefresh();
      }
    },
    onOfflineReady: () => {
      isInstalling.value = false;
    },
    onRegisterError: (error) => {
      console.error('Error during service worker registration:', error);
    },
  });

  const updateThenRefresh = () => updateServiceWorker(true);

  if (option?.checkOnRoute) {
    if ('serviceWorker' in navigator) {
      watch([() => route.path], async () => {
        const reg = await navigator.serviceWorker.getRegistration();
        if (!reg) return;
        const error = reg.update().catch((e: Error) => e);
        if (error instanceof Error) console.error(error);
      });
    }
  }

  return { isInstalling, isUpdateAvailable, updateThenRefresh };
}
