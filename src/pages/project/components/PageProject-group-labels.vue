<template>
  <div class="labels">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.labels {
  width: 100%;
  gap: 4px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
