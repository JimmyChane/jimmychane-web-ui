<template>
  <div class="PageHome-section">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.PageHome-section {
  --background-color: white;
  --padding: 2rem;
}
</style>

<style scoped lang="scss">
.PageHome-section {
  width: 100%;
  padding: var(--padding);
  border-radius: 2rem;

  background: var(--background-color);
}
</style>
