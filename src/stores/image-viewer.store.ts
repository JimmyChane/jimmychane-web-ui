import { defineStore } from 'pinia';
import { defineAsyncComponent } from 'vue';

import { useDialog } from './store';

import type { AppImageViewerData } from '@/app/image-viewer/AppImageViewer.vue';

export const useImageViewerStore = defineStore('image-viewer', () => {
  const { open } = useDialog<AppImageViewerData>({
    component: defineAsyncComponent(() => import('@/app/image-viewer/AppImageViewer.vue')),
  });

  return { open };
});
