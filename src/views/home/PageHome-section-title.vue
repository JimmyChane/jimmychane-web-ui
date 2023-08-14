<template>
  <h2 class="PageHome-section-title">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
  .PageHome-section-title {
    position: absolute;
    background: white;
    color: var(--color);
    padding: 0.5em;
    padding-left: 1em;
    width: 9em;
    text-align: start;

    border: 4px solid var(--color);
    border-radius: 1em;

    top: -1em;
    left: calc(var(--padding) - 4px);

    @media (max-width: 20rem) {
      font-size: 1.2em;
    }
    @media (max-width: 18rem) {
      font-size: 1em;
    }
  }
</style>
