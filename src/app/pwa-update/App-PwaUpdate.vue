<script setup lang="ts">
defineProps<{ show: boolean; clickUpdate: () => void }>();
</script>

<template>
  <div class="app-pwa-update" :data-show="show">
    <span>New version available!</span>
    <button @click="() => clickUpdate()">Update</button>
  </div>
</template>

<style scoped lang="scss">
.light {
  .app-pwa-update {
    & > button {
      color: var(--primary-color-900);
    }
  }
}
.dark {
  .app-pwa-update {
    & > button {
      color: white;
    }
  }
}
.app-pwa-update {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  border-radius: 1.2em;
  padding: 0.8em;
  gap: 0.5em;

  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  font-size: 0.875rem;

  background-color: var(--primary-color-100);
  border: 1px solid var(--primary-color-200);
  transition: opacity 200ms ease;

  & > button {
    border-radius: 0.5em;
    padding: 0.4em 0.8em;
    font-size: 0.875rem;

    background-color: var(--primary-color-300);
    border: none;
  }

  &[data-show='true'] {
    opacity: 1;
  }
  &[data-show='false'] {
    opacity: 0;

    pointer-events: none;
    user-select: none;
  }
}
</style>
