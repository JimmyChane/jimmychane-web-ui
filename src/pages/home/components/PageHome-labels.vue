<script setup lang="ts">
defineProps<{ labels: string[] }>();
</script>

<template>
  <div class="PageHome-labels" style="grid-area: labels">
    <div v-for="(label, index) of labels" :key="label">
      <span>{{ label }}</span>
      <div v-if="index < labels.length - 1" class="PageHome-labels-dot"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.PageHome-labels {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
  & > * {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    gap: inherit;
  }

  .PageHome-labels-dot {
    display: flex;
    line-height: 1rem;

    --size: 4px;
    --width: var(--size);
    --height: var(--size);

    width: var(--width);
    min-width: var(--width);
    max-width: var(--width);
    height: var(--height);
    min-height: var(--height);
    max-height: var(--height);

    background: var(--primary-text-color);
    border-radius: 50%;
    overflow: hidden;
  }

  @media (min-width: 850px) {
    width: 100%;
    grid-row: 0;
    place-self: start;
    justify-content: flex-start;
  }
}
</style>
