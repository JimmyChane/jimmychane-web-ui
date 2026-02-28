<script setup lang="ts"></script>

<template>
  <div class="home-pfp-background">
    <div>
      <div class="home-pfp-background-10"></div>
      <div class="home-pfp-background-20"></div>
      <div class="home-pfp-background-30"></div>
      <div class="home-pfp-background-40"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-pfp-background {
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  user-select: none;
  pointer-events: none;
  border-radius: inherit;

  transition: background-color 200ms ease;
  background-color: var(--primary-color-dark-900);

  --y: 30%;

  & > * {
    position: relative;
    width: 100%;
    height: 100%;
    & > * {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      display: flex;

      transition: background-color 200ms ease;
    }
  }

  /* --- Starting at 10% --- */
  .home-pfp-background-10 {
    background-image: radial-gradient(
      circle at 50% var(--y),
      var(--primary-color-dark-300) 0% 10%,
      var(--primary-color-dark-400) 10% 28%,
      var(--primary-color-dark-500) 28% 46%,
      var(--primary-color-dark-600) 46% 64%,
      var(--primary-color-dark-800) 64% 82%,
      var(--primary-color-dark-900) 82% 100%
    );
  }

  /* --- Starting at 20% --- */
  .home-pfp-background-20 {
    background-image: radial-gradient(
      circle at 50% var(--y),
      var(--primary-color-dark-300) 0% 20%,
      var(--primary-color-dark-400) 20% 36%,
      var(--primary-color-dark-500) 36% 52%,
      var(--primary-color-dark-600) 52% 68%,
      var(--primary-color-dark-800) 68% 84%,
      var(--primary-color-dark-900) 84% 100%
    );
  }

  /* --- Starting at 30% --- */
  .home-pfp-background-30 {
    background-image: radial-gradient(
      circle at 50% var(--y),
      var(--primary-color-dark-300) 0% 30%,
      var(--primary-color-dark-400) 30% 44%,
      var(--primary-color-dark-500) 44% 58%,
      var(--primary-color-dark-600) 58% 72%,
      var(--primary-color-dark-800) 72% 86%,
      var(--primary-color-dark-900) 86% 100%
    );
  }

  /* --- Starting at 40% --- */
  .home-pfp-background-40 {
    background-image: radial-gradient(
      circle at 50% var(--y),
      var(--primary-color-dark-300) 0% 40%,
      var(--primary-color-dark-400) 40% 52%,
      var(--primary-color-dark-500) 52% 64%,
      var(--primary-color-dark-600) 64% 76%,
      var(--primary-color-dark-800) 76% 88%,
      var(--primary-color-dark-900) 88% 100%
    );
  }
}
</style>
