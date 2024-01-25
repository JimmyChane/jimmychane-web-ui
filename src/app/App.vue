<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import Actionbar from '@/app/actionbar/App-Actionbar.vue';
  import Statusbar from './statusbar/App-Statusbar.vue';
  import CheeseHoles from '@/app/background/CheeseHoles.vue';

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

  const route = useRoute();

  watch(
    () => route.name,
    () => {
      const html = document.querySelector('html');
      html?.scrollTo({ top: 0 });
    },
  );
</script>

<template>
  <div class="App" :data-dark="currentTheme !== 'light'">
    <CheeseHoles style="z-index: 0" />

    <Actionbar
      style="z-index: 2"
      :theme="currentTheme"
      @change-theme="(value) => onChangeTheme(value)"
    />

    <div class="App-body" style="z-index: 1">
      <router-view />
    </div>

    <Statusbar style="z-index: 2" />
  </div>
</template>

<style lang="scss">
  .App {
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    --actionbar-height: 5rem;
    --statusbar-height: 2.5rem;
    --content-max-width: 70rem;

    color: var(--color-active);
    background: var(--background-color);

    width: 100%;
    min-height: 100dvh;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;

    position: relative;

    .App-body {
      width: 100%;
      min-height: calc(100dvh - var(--actionbar-height) - var(--statusbar-height));
      height: max-content;

      flex-grow: 1;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    &[data-dark='false'] {
      --color: #fff48c;
      --color-dark: #74500e;
      --color-active: var(--color-dark);

      --text-color: hsl(0, 0%, 0%);
      --text-color-opacity5: hsla(0, 0%, 0%, 0.05);
      --text-color-opacity30: hsla(0, 0%, 0%, 0.3);
      --text-color-opacity50: hsla(0, 0%, 0%, 0.5);
      --text-color-opacity70: hsla(0, 0%, 0%, 0.7);
      --text-color-opacity90: hsla(0, 0%, 0%, 0.9);

      --background-color: #fdf8c8;
      --background-color-opacity5: hsla(0, 0%, 100%, 0.05);
      --background-color-opacity50: hsla(0, 0%, 100%, 0.5);
      --background-color-opacity70: hsla(0, 0%, 100%, 0.7);
      --background-color-opacity90: hsla(0, 0%, 100%, 0.9);
      --background-color-opacity100: hsla(0, 0%, 100%, 1);

      --icon-light-invert: invert(100%);
      --icon-dark-invert: invert(0%);

      --section-fursona-header-background-color: rgb(180, 231, 224);
      --section-fursona-background-color: #5ba097;
      --section-fursona-text-color: rgb(2, 32, 28);

      --cheese-color: #f6e97756;
      --cheese-color-pfp: var(--cheese-color);
    }
    &[data-dark='true'] {
      --color: #b6862d;
      --color-dark: #3a2807;
      --color-active: var(--text-color);

      --text-color: hsl(0, 0%, 100%);
      --text-color-opacity5: hsla(0, 0%, 100%, 0.05);
      --text-color-opacity50: hsla(0, 0%, 100%, 0.5);
      --text-color-opacity70: hsla(0, 0%, 100%, 0.7);
      --text-color-opacity90: hsla(0, 0%, 100%, 0.9);

      --background-color: #1a1d21;
      --background-color-opacity5: hsla(0, 0%, 0%, 0.05);
      --background-color-opacity20: hsla(0, 0%, 0%, 0.2);
      --background-color-opacity50: hsla(0, 0%, 0%, 0.5);
      --background-color-opacity70: hsla(0, 0%, 0%, 0.7);
      --background-color-opacity90: hsla(0, 0%, 0%, 0.9);
      --background-color-opacity100: hsla(0, 0%, 0%, 1);

      --icon-light-invert: invert(0%);
      --icon-dark-invert: invert(100%);

      --section-fursona-header-background-color: rgb(56, 80, 77);
      --section-fursona-background-color: rgb(41, 58, 56);
      --section-fursona-text-color: var(--text-color);

      --cheese-color: hsla(0, 0%, 0%, 0.15);
      --cheese-color-pfp: var(--background-color-opacity70);
    }
  }
</style>
