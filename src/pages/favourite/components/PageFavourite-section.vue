<script setup lang="ts">
  defineProps<{ title: string }>();
</script>

<template>
  <div class="page-favourite-section">
    <span class="page-favourite-section-title">{{ title }}</span>
    <div><slot></slot></div>
  </div>
</template>

<style scoped lang="scss">
  .page-favourite-section {
    width: 100%;
    gap: 0.2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .page-favourite-section-title {
      font-size: 1.2em;
      font-weight: 600;
    }
  }
</style>
