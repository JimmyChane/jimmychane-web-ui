<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 32 });
</script>

<template>
  <svg
    class="hamburger-icon"
    :width="size"
    :height="size"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="386" width="512" height="60" rx="19" fill="black" />
    <rect y="226" width="512" height="60" rx="19" fill="black" />
    <rect y="66" width="512" height="60" rx="19" fill="black" />
  </svg>
</template>

<style scoped lang="scss">
.hamburger-icon {
  * {
    fill: var(--color);
  }
}
</style>
