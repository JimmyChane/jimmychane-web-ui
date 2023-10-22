<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  const props = defineProps({
    path: { type: String, default: '' },
    title: { type: String, default: '' },
  });

  const route = useRoute();

  const isSelected = computed(() => route.path === props.path);
</script>

<template>
  <router-link class="App-Nav" :isSelected="isSelected" :to="path">{{ title }}</router-link>
</template>

<style lang="scss" scoped>
  .App-Nav {
    padding: 0.8em 1em;
    border-radius: 1em;
    line-height: 1em;

    font-size: 1rem;
    font-weight: 600;
    color: var(--text-color);
    text-decoration: none;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 400ms ease;
  }
  .App-Nav[isSelected='true'] {
    background: var(--color-active);
    color: var(--background-color);
  }
</style>
