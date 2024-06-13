<script setup lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue';

  const scrollTop = ref(0);

  function onScroll() {
    scrollTop.value = window.scrollY;
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
  });
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });
</script>

<template>
  <div class="CheeseHoles" :style="{ '--scroll-top': `${scrollTop}px` }">
    <div class="CheeseHoles-body">
      <div class="CheeseHoles-center">
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
</template>

<style scoped lang="scss">
  .CheeseHoles {
    top: 0;
    left: 0;
    position: fixed;

    --width: 100%;
    --height: 100dvh;

    @media (min-height: 1000px) {
      --height: calc(100lvh + var(--scroll-top) * 0.8);
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

    pointer-events: none;
    user-select: none;

    .CheeseHoles-body {
      --width: 100%;
      --height: calc(100dvh - var(--scroll-top) * 0.8);

      min-width: var(--width);
      min-height: var(--height);
      max-width: var(--width);
      max-height: var(--height);

      display: flex;
      align-items: center;
      justify-content: center;

      .CheeseHoles-center {
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
</style>
