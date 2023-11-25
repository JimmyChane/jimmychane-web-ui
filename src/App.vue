<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';
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

  function onScroll() {
    scrollTop.value = window.scrollY;
  }

  onChangeTheme(localStorage.getItem('theme'), false);

  const scrollTop = ref(0);

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
</script>

<template>
  <div :class="['App', currentTheme === 'light' ? 'App-light-theme' : 'App-dark-theme']">
    <div
      class="App-dots"
      :style="{
        '--scroll-top': `${scrollTop}px`,
      }"
    >
      <div class="App-dots-body">
        <div class="App-dots-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>

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
  .App-dots {
    top: 0;
    left: 0;
    position: absolute;

    --width: 100%;
    --height: calc(150dvh + var(--scroll-top) * 0.8);

    @media (min-height: 1000px) { 
      --height: calc(100dvh + var(--scroll-top) * 0.8);
    }

    min-width: var(--width);
    min-height: var(--height);
    max-width: var(--width);
    max-height: var(--height);

    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .App-dots-body {
      --width: 100%;
      --height: 100dvh;

      min-width: var(--width);
      min-height: var(--height);
      max-width: var(--width);
      max-height: var(--height);

      display: flex;
      align-items: center;
      justify-content: center;

      .App-dots-center {
        position: relative;
        width: 1px;
        height: 1px;
        overflow: visible;

        & > * {
          position: absolute;

          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--cheese-color);

          width: var(--size);
          height: var(--size);
        }
        & > *:nth-child(1) {
          left: -40vw;
          top: -41dvh;
          --size: 2rem;
        }
        & > *:nth-child(2) {
          left: -12rem;
          top: -25vw;
          --size: 6vw;
        }
        & > *:nth-child(3) {
          left: 20vw;
          top: -10dvh;
          --size: 10vw;
          height: 12vw;

          max-width: 6rem;
          max-height: 7rem;
        }
        & > *:nth-child(4) {
          left: 10vw;
          top: -44dvh;
          --size: 10vw;
          width: 12vw;
        }
        & > *:nth-child(5) {
          right: 38vw;
          top: 46vw;
          --size: 20vw;
          width: 40vw;

          max-width: 10rem;
          max-height: 7rem;
        }
        & > *:nth-child(6) {
          left: 37vw;
          top: 10dvh;
          --size: 40vw;
        }
        & > *:nth-child(7) {
          left: 37vw;
          top: -34dvh;
          --size: 8vw;
        }
        & > *:nth-child(8) {
          left: -20vw;
          top: 12dvh;
          --size: 14vw;
          width: 18vw;
        }
        & > *:nth-child(9) {
          left: -46vw;
          top: 8dvh;
          --size: 4rem;
        }
      }
    }
  }

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
  .App-dark-theme {
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
