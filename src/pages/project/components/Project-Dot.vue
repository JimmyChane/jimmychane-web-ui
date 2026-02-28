<script setup lang="ts"></script>

<template>
  <span class="project-dot"></span>
</template>

<style lang="scss" scoped>
.project-dot {
  background-color: var(--color-emerald-600);
  display: flex;
  flex-direction: column;

  --size: 0.5em;
  width: var(--size);
  height: var(--size);

  border-radius: 50%;
}
</style>
