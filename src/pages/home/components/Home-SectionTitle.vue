<script setup lang="ts"></script>

<template>
  <div class="home-section-title">
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.light {
  .home-section-title {
    color: var(--primary-color-dark-300);
    opacity: 0.8;
  }
}
.dark {
  .home-section-title {
    color: var(--text-color);
    opacity: 0.8;
  }
}
.home-section-title {
  font-size: 1rem;

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: 1em;

  text-align: start;

  & > span {
    background-color: var(--color-emerald-600);
    display: flex;
    flex-direction: column;

    --size: 0.4em;
    width: var(--size);
    height: var(--size);
    margin-inline: var(--size);

    border-radius: 50%;
  }
  & > h3 {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
}
</style>
