<template>
  <div class="App-footer">
    <span>v0.11.5</span>
  </div>
</template>

<style lang="scss" scoped>
.App-footer {
  width: 100%;
  height: var(--statusbar-height);

  gap: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1rem;
  font-size: 0.6rem;

  background-color: var(--background-color-opacity50);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    --blur: 1rem;
    -webkit-backdrop-filter: blur(var(--blur));
    backdrop-filter: blur(var(--blur));
  }
}
</style>
