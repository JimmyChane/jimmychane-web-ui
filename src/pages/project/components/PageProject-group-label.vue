<template>
  <span class="label">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.label {
  background: var(--color-dark);
  color: white;
  padding: 0.3em 0.8em;
  border-radius: 2em;

  font-size: 0.8em;
}
</style>
