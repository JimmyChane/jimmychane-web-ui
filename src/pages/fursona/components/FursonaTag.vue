<script setup lang="ts"></script>

<template>
  <div class="fursona-tag">
    <div class="fursona-tag-icon">
      <slot name="icon"></slot>
    </div>
    <div class="fursona-tag-body">
      <span class="fursona-tag-title">
        <slot name="title"></slot>
      </span>
      <span class="fursona-tag-content">
        <slot name="content"></slot>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fursona-tag {
  width: 100%;

  font-size: 1rem;
  padding: 0.7em;
  gap: 0.7em;
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background-color: var(--primary-color-light-100);
  border: 1px solid var(--primary-color-dark-100);

  .fursona-tag-icon {
    font-size: 1.2em;

    width: 2.2em;
    min-width: 2.2em;
    max-width: 2.2em;
    height: 2.2em;
    min-height: 2.2em;
    max-height: 2.2em;

    background-color: var(--primary-color-light-200);
    border-radius: 0.5em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .fursona-tag-body {
    min-height: 2.2em;
    display: flex;
    flex-direction: column;

    .fursona-tag-title {
      font-size: 0.875em;
      opacity: 0.8;
    }
    .fursona-tag-content {
      font-weight: 700;
    }
  }
}
</style>
