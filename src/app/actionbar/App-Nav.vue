<script setup lang="ts">
  import { computed, type Component } from 'vue';
  import { useRoute } from 'vue-router';

  const props = withDefaults(
    defineProps<{
      path: string;
      title: string;
      icon?: Component;
    }>(),
    {
      path: '',
      title: '',
    },
  );

  const route = useRoute();

  const isSelected = computed(() => route.path === props.path);
</script>

<template>
  <router-link
    class="App-Nav"
    :class="icon ? 'App-Nav-withIcon' : ''"
    :isSelected="isSelected"
    :to="path"
  >
    <component v-if="icon" class="App-Nav-icon" :is="icon" :width="20" :height="20" />
    <span class="App-Nav-title">{{ title }}</span>
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
