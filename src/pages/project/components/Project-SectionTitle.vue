<script setup lang="ts"></script>

<template>
  <div class="project-section-title">
    <span></span>
    <h3>
      <slot></slot>
    </h3>
  </div>
</template>

<style lang="scss" scoped>
.light {
  .project-section-title {
    color: #1e293b;
  }
}
.dark {
  .project-section-title {
    color: var(--text-color);
  }
}
.project-section-title {
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
  }
}
</style>
