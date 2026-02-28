<script setup lang="ts">
defineProps<{ model: string; index: number; length: number }>();
</script>

<template>
  <div class="home-label">
    <span>{{ model }}</span>
    <div v-if="index < length - 1" class="home-label-dot">
      <span></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.light {
  .home-label {
    --text-color: var(--primary-color-400);
  }
}
.dark {
  .home-label {
    --text-color: var(--text-color-opacity70);
  }
}
.home-label {
  --text-color: var(--primary-color-400);

  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-color);

  display: inherit;
  flex-direction: inherit;
  align-items: inherit;
  gap: inherit;
}

.home-label-dot {
  min-height: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-inline: 0.5em;

  & > span {
    display: flex;
    line-height: 1rem;

    --size: 6px;
    --width: var(--size);
    --height: var(--size);

    width: var(--width);
    min-width: var(--width);
    max-width: var(--width);
    height: var(--height);
    min-height: var(--height);
    max-height: var(--height);

    background: var(--text-color);
    border-radius: 50%;
    overflow: hidden;
  }
}
</style>
