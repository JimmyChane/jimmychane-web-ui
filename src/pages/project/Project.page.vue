<script setup lang="ts">
import { PROJECT_FRESHNET } from '@/config/freshnet.project.meta';
import { PROJECT_GRYFDER_DEFICERE } from '@/config/gryfder.project.meta';
import { PROJECT_RHOUGHOUS } from '@/config/rhougous.project.meta';
import { PROJECT_RORY_XAVIER } from '@/config/roryxavier.project.meta';

import AppSectionTitle from '@/components/AppSectionTitle.vue';
import AppPage from '@/layout/navigation/components/page/AppPage.vue';

import ProjectCard from './components/Project-Card.vue';
import ProjectDot from './components/Project-Dot.vue';
import ProjectPageTitle from './components/Project-PageTitle.vue';
</script>

<template>
  <AppPage>
    <div class="project-page">
      <ProjectPageTitle />

      <div class="project-section">
        <AppSectionTitle>
          <template #icon><ProjectDot /></template>
          Milestone
        </AppSectionTitle>
        <div class="project-milestone-list">
          <ProjectCard :model="PROJECT_RORY_XAVIER" />
          <ProjectCard :model="PROJECT_GRYFDER_DEFICERE" />
          <ProjectCard :model="PROJECT_RHOUGHOUS" />
          <ProjectCard :model="PROJECT_FRESHNET" />
        </div>
      </div>
    </div>
  </AppPage>
</template>

<style scoped lang="scss">
.light {
  .project-page {
    --primary-color: var(--primary-color-500);
  }
}
.dark {
  .project-page {
    --primary-color: var(--primary-color-200);
  }
}
.project-page {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 10rem;

  .project-section {
    margin-top: 1rem;
    width: 100%;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-milestone-list {
    width: 100%;
    gap: 1rem;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  }
}
</style>
