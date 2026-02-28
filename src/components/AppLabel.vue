<script setup lang="ts">
import { computed, useSlots } from 'vue';

const { align = 'horizontal' } = defineProps<{ align?: 'vertical' | 'horizontal' }>();

const slots = useSlots();
const hasTitle = computed(() => !!slots.title);
</script>

<template>
  <span class="app-label" :data-align="align" :data-title="hasTitle">
    <span v-if="hasTitle" class="app-label-title">
      <slot name="title"></slot>
    </span>
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
.app-label {
  font-size: 0.7rem;
  font-weight: 700;

  padding: 0.3em 1.2em;
  border-radius: 2em;
  background-color: var(--primary-color-light-200);

  .app-label-title {
    font-size: 0.875em;
    font-weight: 400;
    opacity: 0.8;
  }

  &[data-align='vertical'] {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;

    &[data-title='true'] {
      padding: 0.3em 1.6em;
    }
  }
  &[data-align='horizontal'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    .app-label-title {
      margin-right: 0.5em;
    }
  }
}
</style>
