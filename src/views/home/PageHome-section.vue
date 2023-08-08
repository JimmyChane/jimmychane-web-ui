<template>
  <div class="card">
    <div class="card-body">
      <slot />
    </div>
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
    align-items: center;

    &:first-child {
      padding-top: 1rem;
    }
    &:last-child {
      padding-bottom: 1rem;
    }

    .card-body {
      width: 100%;
      padding: 3rem 2rem;
      border-radius: 2rem;
      background: var(--background-color);
    }

    @media (min-width: 1200px) {
      padding: 1rem 5rem;
      &:first-child {
        padding-top: 2rem;
      }
      &:last-child {
        padding-bottom: 2rem;
      }

      .card-body {
        max-width: var(--max-width);
        padding: 3.5rem;
      }
    }
  }
</style>
