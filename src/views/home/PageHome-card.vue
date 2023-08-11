<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 100%;
    padding: 3rem 2rem;
    gap: 2rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    border-radius: 2rem;
    background: var(--background-color);

    @media (min-width: 1200px) {
      padding: 3.5rem;
    }
  }
</style>
