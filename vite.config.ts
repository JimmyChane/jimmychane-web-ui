import vue from '@vitejs/plugin-vue';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      selfDestroying: true,
      injectRegister: null,
      registerType: 'prompt',
      manifestFilename: 'manifest.json',
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
        display: 'browser',
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
