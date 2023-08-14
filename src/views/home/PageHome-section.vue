<template>
  <div class="PageHome-section" :style="{ 'grid-area': 'project' }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .PageHome-section {
    background: var(--color);

    position: relative;
    border-radius: 2rem;

    --padding: 2rem;
    padding: var(--padding);
    padding-top: calc(var(--padding) + 2rem);

    @media (min-width: 800px) {
      --padding: 4rem;
    }
  }
</style>
