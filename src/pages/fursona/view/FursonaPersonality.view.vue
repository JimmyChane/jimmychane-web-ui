<script setup lang="ts">
import AppSectionTitle from '@/components/AppSectionTitle.vue';
import CheckCircleIcon from '@/components/icon/CheckCircle.icon.vue';
import StyleIcon from '@/components/icon/Style.icon.vue';

import FursonaPersonality from '../components/FursonaPersonality.vue';
</script>

<template>
  <div class="fursona-personality">
    <AppSectionTitle>
      <template #icon><StyleIcon /></template>
      Personality
    </AppSectionTitle>
    <div class="fursona-personality-content">
      <p>
        "Jimmy is a curious soul with a penchant for finding beauty in the smallest details. He is often found sketching
        in digital parks or exploring new UI trends."
      </p>
      <div>
        <FursonaPersonality>
          <template #icon><CheckCircleIcon /></template>
          <template #title>Stylelist Simplicity</template>
          <template #content>
            Prefers clean lines and minimalist aesthetics in both digital work and personal style.
          </template>
        </FursonaPersonality>
        <FursonaPersonality>
          <template #icon><CheckCircleIcon /></template>
          <template #title>Hobbies & Interests</template>
          <template #content>
            Passionate about character rigging, coffee brewing, and exploring virtual worlds.
          </template>
        </FursonaPersonality>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fursona-personality {
  width: 100%;
  gap: 0.8rem;

  display: flex;
  flex-direction: column;

  .fursona-personality-content {
    width: 100%;
    padding: 1.8rem;
    gap: 1.8rem;
    border-radius: 1rem;

    background-color: var(--primary-color-light-100);
    border: 1px solid var(--primary-color-dark-100);

    & > p {
      font-size: 0.875rem;
      font-weight: 400;
      opacity: 0.8;
    }
    & > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1rem;

      & > * {
        flex-basis: 20rem;
      }
    }
  }
}
</style>
