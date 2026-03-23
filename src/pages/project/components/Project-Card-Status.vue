<script setup lang="ts">
import type { ProjectStatusCode } from '@/config/project/project.meta';

import ProjectCardStatusItem from './Project-Card-Status-Item.vue';

defineProps<{ statuses: ProjectStatusCode[] }>();
</script>

<template>
  <span class="project-card-status">
    <ProjectCardStatusItem v-for="status in statuses" :model="status" />
  </span>
</template>

<style lang="scss" scoped>
.project-card-status {
  font-size: 1rem;
  gap: 0.5em;

  position: absolute;
  top: 0.6em;
  left: 0.6em;

  display: flex;
  align-items: center;
}
</style>
