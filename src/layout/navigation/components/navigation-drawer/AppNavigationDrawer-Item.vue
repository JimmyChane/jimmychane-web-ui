<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import type { AppRoute } from '@/stores/navigation.store';

const props = defineProps<{ item: AppRoute }>();
const route = useRoute();
const isSelected = computed(() => route.name === props.item.id);
</script>

<template>
  <RouterLink class="App-Nav" :class="item.icon ? 'App-Nav-withIcon' : ''" :isSelected="isSelected" :to="item.path">
    <component v-if="item.icon" class="App-Nav-icon" :is="item.icon" :size="20" />
    <span class="App-Nav-title">{{ item.title }}</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
.App-Nav {
  padding: 0.8em 1em;
  border-radius: 1em;
  line-height: 1em;
  gap: 0.5em;

  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  transition: all 400ms ease;
}

.light {
  .App-Nav[isSelected='false'] {
    color: var(--primary-color-500);

    &:hover {
      background-color: var(--primary-color-300);
    }
  }
  .App-Nav[isSelected='true'] {
    color: var(--primary-color-100);
    background: var(--primary-color-500);
  }
}
.dark {
  .App-Nav[isSelected='false'] {
    color: var(--text-color);

    &:hover {
      background-color: var(--text-color-opacity5);
    }
  }
  .App-Nav[isSelected='true'] {
    color: var(--background-color-opacity100);
    background: var(--text-color);
  }
}
</style>
