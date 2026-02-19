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
  padding: 0.6rem 0.8rem;
  border-radius: 2em;
  line-height: 1rem;
  gap: 0.5em;

  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  transition: all 400ms ease;

  .App-Nav-icon {
    font-size: 1.042rem;
  }
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

.App-Nav-withIcon {
  @media (max-width: 600px) {
    gap: 0px;

    .App-Nav-title {
      display: none;
    }
  }
}
</style>
