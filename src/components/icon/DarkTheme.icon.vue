<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 32 });
</script>

<template>
  <svg
    class="dark-theme"
    :width="size"
    :height="size"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M448.024 415.923C306.617 415.923 192.01 301.217 192.01 159.716C192.01 99.2672 213.049 43.8097 248.051 0C110.356 4.25383 0 116.982 0 255.793C0 397.295 114.606 512 256.014 512C337.018 512 409.085 474.27 456 415.522C453.325 415.61 450.712 415.923 448.024 415.923Z"
      fill="black"
    />
  </svg>
</template>

<style scoped lang="scss">
.dark-theme {
  path {
    --color: var(--color-active);
    fill: var(--color);
  }
}
</style>
