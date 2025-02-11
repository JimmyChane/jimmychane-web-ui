import { defineListStoreDefinition } from '@chanzor/vue-utils';
import { defineStore } from 'pinia';

import { BLUESKY, GITHUB, TELEGRAM, TWITTER } from '@/models/SocialPlatform.model';

export const useSocialPlatformStore = defineStore('social-platform', () => {
  return defineListStoreDefinition({
    fetchList() {
      return [TWITTER, TELEGRAM, GITHUB, BLUESKY];
    },
  });
});
