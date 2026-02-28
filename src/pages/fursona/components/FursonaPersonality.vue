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
  gap: 0.5em;
  border-radius: 1rem;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  .fursona-tag-icon {
    font-size: 1.2em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 1.2em;
    min-width: 1.2em;
    max-width: 1.2em;
    height: 1.2em;
    min-height: 1.2em;
    max-height: 1.2em;
  }

  .fursona-tag-body {
    min-height: 3em;
    display: flex;
    flex-direction: column;

    .fursona-tag-title {
      font-weight: 700;
    }
    .fursona-tag-content {
      font-size: 0.875em;
      font-weight: 400;
      opacity: 0.8;
    }
  }
}
</style>
