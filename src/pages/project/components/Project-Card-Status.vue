<script setup lang="ts">
import { computed } from 'vue';

import type { ProjectStatusCode } from '@/config/project.meta';

const props = defineProps<{ model: ProjectStatusCode }>();

const text = computed<string>(() => {
  switch (props.model) {
    case 'active':
      return 'ACTIVE';
    case 'developing':
      return 'DEVELOPING';
    case 'deprecated':
      return 'DEPRECATED';
  }
});
const color = computed<string>(() => {
  switch (props.model) {
    case 'active':
      return 'green';
    case 'developing':
      return 'orange';
    case 'deprecated':
      return 'red';
  }
});
</script>

<template>
  <span class="project-card-status" :data-color="color">
    <span></span>
    {{ text }}
  </span>
</template>

<style lang="scss" scoped>
.project-card-status {
  --text-color: white;

  font-size: 0.6rem;
  font-weight: 600;
  padding: 0.2em 1em;
  gap: 0.5em;

  position: absolute;
  top: 1em;
  left: 1em;

  text-align: start;
  border-radius: 1rem;
  text-align: center;
  color: var(--text-color);

  display: flex;
  align-items: center;

  & > span {
    background-color: var(--text-color);
    display: inline-block;

    --size: 0.4em;
    width: var(--size);
    min-width: var(--size);
    max-width: var(--size);
    height: var(--size);
    min-height: var(--size);
    max-height: var(--size);

    border-radius: 50%;
  }

  &[data-color='green'] {
    background-color: var(--color-emerald-400);
  }
  &[data-color='orange'] {
    background-color: var(--color-amber-300);
  }
  &[data-color='red'] {
    background-color: var(--color-ruby-400);
  }
}
</style>
