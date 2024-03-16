<script setup lang="ts">
  import type { Route } from '@/data/Route';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const props = defineProps<{ item: Route }>();
  const route = useRoute();
  const isSelected = computed(() => route.name === props.item.key);
</script>

<template>
  <router-link
    class="App-Nav"
    :class="item.icon ? 'App-Nav-withIcon' : ''"
    :isSelected="isSelected"
    :to="item.path"
  >
    <component v-if="item.icon" class="App-Nav-icon" :is="item.icon" :width="20" :height="20" />
    <span class="App-Nav-title">{{ item.title }}</span>
  </router-link>
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
    justify-content: center;

    transition: all 400ms ease;
  }
  .App-Nav[isSelected='false'] {
    --color: var(--color-active);
    color: var(--color);
  }
  .App-Nav[isSelected='true'] {
    --color: var(--background-color);
    color: var(--color);
    background: var(--color-active);
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
