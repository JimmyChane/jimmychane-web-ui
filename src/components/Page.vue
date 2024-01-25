<template>
  <div class="Page">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .Page {
    width: 100%;
    max-width: var(--content-max-width);
    height: 100%;
    transition: all 200ms ease;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    @media (min-width: 700px) {
      padding: 2rem;
    }
    @media (min-width: 1200px) {
      padding: 4rem;
    }
  }
</style>
