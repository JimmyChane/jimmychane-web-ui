<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    --max-width: 70rem;

    width: 100%;
    gap: 2rem;
    padding: 0.5rem 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 100%;
    padding: 3rem 2rem;
    border-radius: 2rem;
    background: var(--background-color);

    @media (min-width: 1200px) {
      max-width: var(--max-width);
      padding: 3.5rem;
    }
  }
</style>
