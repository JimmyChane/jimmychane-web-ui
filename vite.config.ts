import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import ViteInspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';

import Package from './package.json';

type PwaInjectionType = 'inline' | 'script' | 'script-defer' | 'auto' | null | false;
type PwaRegisterType = 'prompt' | 'autoUpdate';

function getPwaConfig(): { selfDestroying: boolean; injectRegister: PwaInjectionType; registerType: PwaRegisterType } {
  return { selfDestroying: false, injectRegister: false, registerType: 'prompt' };
}

// https://vitejs.dev/config/
export default defineConfig(() => {
  const { selfDestroying, injectRegister, registerType } = getPwaConfig();

  return {
    plugins: [
      vue(),
      VitePWA({
        selfDestroying,
        injectRegister,
        registerType,
        manifestFilename: 'manifest.json',
        filename: 'sw.js',
        manifest: {
          name: 'Jimmy Chane',
          short_name: 'Jimmy',
          icons: [
            { src: '/icon/favicon-16.png', sizes: '16x16', type: 'image/png' },
            { src: '/icon/favicon-32.png', sizes: '32x32', type: 'image/png' },
            { src: '/icon/favicon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/icon/favicon-512.png', sizes: '512x512', type: 'image/png' },
          ],
          start_url: '/',
          theme_color: '#E0F7F2',
          background_color: '#E0F7F2',
          display: 'minimal-ui',
        },
        workbox: {
          cleanupOutdatedCaches: true,
          globPatterns: ['**/*.{js,css,html,ico,webp,png,svg}'],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5MB limit
        },
      }),
      ViteInspect(),
    ],
    define: {
      'import.meta.env.APP_VERSION': JSON.stringify(Package.version),
      'import.meta.env.APP_NAME': JSON.stringify(Package.name),
    },
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  };
});
