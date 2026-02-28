<script setup lang="ts"></script>

<template>
  <span class="fursona-dot"></span>
</template>

<style lang="scss" scoped>
.fursona-dot {
  background-color: var(--text-color);
  display: flex;
  flex-direction: column;

  --size: 0.5em;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;
}
</style>
