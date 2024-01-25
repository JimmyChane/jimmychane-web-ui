<template>
  <div class="App-footer">
    <span>2024 January 25</span>
    <span class="App-footer-separator" />
    <span>v0.9.1</span>
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

    position: sticky;
    bottom: -1px;

    background-color: var(--background-color-opacity50);

    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      --blur: 1rem;
      -webkit-backdrop-filter: blur(var(--blur));
      backdrop-filter: blur(var(--blur));
    }

    padding: 0.5em 1em;
    font-size: 0.8em;

    .App-footer-separator {
      display: flex;
      --width: 0.5px;
      --height: 1em;
      width: var(--width);
      height: var(--height);
      min-width: var(--width);
      min-height: var(--height);
      max-width: var(--width);
      max-height: var(--height);

      background-color: var(--text-color-opacity50);
    }
  }
</style>
