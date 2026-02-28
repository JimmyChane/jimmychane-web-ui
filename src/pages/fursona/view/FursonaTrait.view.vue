<script setup lang="ts">
import CategoryIcon from '@/components/icon/Category.icon.vue';
import IdeaIcon from '@/components/icon/Idea.icon.vue';
import PalleteIcon from '@/components/icon/Pallete.icon.vue';

import FursonaTag from '../components/FursonaTag.vue';
</script>

<template>
  <div class="fursona-trait">
    <FursonaTag>
      <template #icon><PalleteIcon /></template>
      <template #title>Primary Color</template>
      <template #content>Earth Orange</template>
    </FursonaTag>
    <FursonaTag>
      <template #icon><IdeaIcon /></template>
      <template #title>Personality</template>
      <template #content>Creative Explorer</template>
    </FursonaTag>
    <FursonaTag>
      <template #icon><CategoryIcon /></template>
      <template #title>Vibe</template>
      <template #content>Stylish Simplicity</template>
    </FursonaTag>
  </div>
</template>

<style scoped lang="scss">
.fursona-trait {
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;

  & > * {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 14rem;
  }
}
</style>
