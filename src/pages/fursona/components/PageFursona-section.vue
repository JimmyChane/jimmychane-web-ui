<template>
  <div class="PageHome-section">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.PageHome-section {
  --section-color: white;
}
</style>

<style scoped lang="scss">
.PageHome-section {
  background: var(--section-color);

  position: relative;
  border-radius: 2rem;

  --padding: 2rem;
  padding: var(--padding);

  @media (min-width: 800px) {
    --padding: 4rem;
  }
}
</style>
