<script setup lang="ts">
  defineProps<{ title: string }>();
</script>

<template>
  <div class="section">
    <h3 class="section-title">{{ title }}</h3>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .section {
    width: 100%;
    gap: 0.5rem;
    display: flex;
    flex-direction: column;

    .section-title {
      font-weight: 600;
    }
  }
</style>
