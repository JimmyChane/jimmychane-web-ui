<template>
  <div class="App-footer">
    <span>2023 August 14</span>
    <span class="App-footer-separator" />
    <span>v0.7</span>
  </div>
</template>

<style lang="scss" scoped>
  .App-footer {
    width: 100%;
    gap: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: hsla(0, 0%, 100%, 0.5);

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

      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>
