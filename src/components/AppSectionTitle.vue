<script setup lang="ts">
import { computed, useSlots } from 'vue';

const slots = useSlots();
const hasIcon = computed(() => !!slots.icon);
</script>

<template>
  <div class="app-section-title">
    <div class="app-section-icon" v-if="hasIcon">
      <slot name="icon"></slot>
    </div>

    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.light {
  .app-section-title {
    color: #1e293b;
  }
}
.dark {
  .app-section-title {
    color: var(--text-color);
  }
}
.app-section-title {
  width: 100%;
  gap: 0.2em;
  font-size: 1em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: 1em;

  text-align: start;

  .app-section-icon {
    font-size: 1em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 1.8em;
    min-width: 1.8em;
    max-width: 1.8em;
    height: 1.8em;
    min-height: 1.8em;
    max-height: 1.8em;
  }
  & > h3 {
    color: inherit;
  }
}
</style>
