<script setup lang="ts">
  import { ref } from 'vue';
  import Actionbar from './App-Actionbar.vue';
  import Footer from './App-Footer.vue';

  const currentTheme = ref('light');

  function saveTheme(theme: string) {
    localStorage.setItem('theme', theme);
  }
  function onChangeTheme(theme: string | null, save = true) {
    switch (theme) {
      case 'light':
        currentTheme.value = 'light';
        break;
      case 'dark':
        currentTheme.value = 'dark';
        break;
    }
    switch (theme) {
      case 'light':
      case 'dark':
        if (save) saveTheme(theme);
    }
  }

  onChangeTheme(localStorage.getItem('theme'), false);
</script>

<template>
  <div :class="['App', currentTheme === 'light' ? 'App-light-theme' : 'App-dark-theme']">
    <Actionbar
      style="z-index: 2"
      :theme="currentTheme"
      @change-theme="(value) => onChangeTheme(value)"
    />

    <div class="App-body" style="z-index: 1">
      <router-view />
    </div>

    <Footer style="z-index: 2" />
  </div>
</template>

<style lang="scss">
  * {
    text-overflow: clip;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-break: break-word;
  }
  body {
    width: 100%;
    min-height: 100dvh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span,
  p {
    padding: 0;
    margin: 0;
    line-height: 1.4em;
    white-space: pre-line;
  }

  .App-light-theme {
    // --color: #3c5f64;
    // --color-dark: #143135;
    --color: #fff48c;
    // --color-dark: #b6862d;
    --color-dark: #74500e;
    --color-active: var(--color-dark);

    --text-color: hsl(0, 0%, 0%);
    --text-color-opacity5: hsla(0, 0%, 0%, 0.05);
    --text-color-opacity30: hsla(0, 0%, 0%, 0.3);
    --text-color-opacity50: hsla(0, 0%, 0%, 0.5);
    --text-color-opacity70: hsla(0, 0%, 0%, 0.7);
    --text-color-opacity90: hsla(0, 0%, 0%, 0.9);

    // --background-color: #e0f7f2;
    --background-color: #fdf8c8;
    --background-color-opacity5: hsla(0, 0%, 100%, 0.05);
    --background-color-opacity50: hsla(0, 0%, 100%, 0.5);
    --background-color-opacity70: hsla(0, 0%, 100%, 0.7);
    --background-color-opacity90: hsla(0, 0%, 100%, 0.9);
    --background-color-opacity100: hsla(0, 0%, 100%, 1);

    --icon-light-invert: invert(100%);
    --icon-dark-invert: invert(0%);

    // --section-fursona-header-background-color: rgb(180, 231, 224);
    // --section-fursona-background-color: #9ed5ce;
    --section-fursona-header-background-color: rgb(180, 231, 224);
    --section-fursona-background-color: #5ba097;
  }
  .App-dark-theme {
    // --color: #3c5f64;
    // --color-dark: #152224;
    --color: #b6862d;
    --color-dark: #3a2807;
    --color-active: var(--text-color);

    --text-color: hsl(0, 0%, 100%);
    --text-color-opacity5: hsla(0, 0%, 100%, 0.05);
    --text-color-opacity30: hsla(0, 0%, 100%, 0.3);
    --text-color-opacity50: hsla(0, 0%, 100%, 0.5);
    --text-color-opacity70: hsla(0, 0%, 100%, 0.7);
    --text-color-opacity90: hsla(0, 0%, 100%, 0.9);

    --background-color: #1a1d21;
    --background-color-opacity5: hsla(0, 0%, 0%, 0.05);
    --background-color-opacity70: hsla(0, 0%, 0%, 0.7);
    --background-color-opacity50: hsla(0, 0%, 0%, 0.5);
    --background-color-opacity90: hsla(0, 0%, 0%, 0.9);
    --background-color-opacity100: hsla(0, 0%, 0%, 1);

    --icon-light-invert: invert(0%);
    --icon-dark-invert: invert(100%);

    --section-fursona-header-background-color: rgb(56, 80, 77);
    --section-fursona-background-color: rgb(41, 58, 56);
  }
  .App {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;900&display=swap');

    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: var(--color-active);
    background: var(--background-color);

    width: 100%;
    min-height: 100dvh;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    .App-body {
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
  }

  :root {
    @media (min-width: 600px) {
      font-size: 1.2rem;
    }
  }

  h1,
  h2,
  h3 {
    margin: 0;
    font-weight: 600;
  }
</style>
