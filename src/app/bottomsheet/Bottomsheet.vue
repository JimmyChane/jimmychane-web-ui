<script setup lang="ts">
import type { BottomsheetProps } from '@chanzor/vue-utils';
import { computed, onMounted } from 'vue';

const props = defineProps<BottomsheetProps>();

const isShowing = computed(() => props.bottomsheet.isShowing);

function clickClose() {
  props.bottomsheet.close();
}

onMounted(() => props.bottomsheet.open());
</script>

<template>
  <div class="bottomsheet" :data-showing="isShowing">
    <div
      style="grid-area: body"
      class="bottomsheet-close"
      @click="clickClose"
    ></div>
    <div style="grid-area: body" class="bottomsheet-body">
      <component :is="bottomsheet.component" :bottomsheet="bottomsheet" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.bottomsheet {
  --shadow-size: 1rem;
  --padding-top: 3rem;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100dvh;
  overflow: hidden;

  display: grid;
  place-items: flex-end;
  grid-template-rows: 1fr max-content;
  grid-template-areas: 'body';

  transition: background-color 200ms ease;

  .bottomsheet-close {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .bottomsheet-body {
    width: 100%;
    max-width: var(--content-max-width);
    max-height: calc(100dvh - var(--padding-top));
    margin-inline: auto;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    overflow: hidden;
    border-radius: 1.5rem 1.5rem 0 0;
    box-shadow: 0 0 var(--shadow-size) rgba(0, 0, 0, 0.5);

    transition: transform 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &[data-showing='false'] {
    pointer-events: none;
    .bottomsheet-body {
      transform: translateY(calc(100% + var(--shadow-size)));
    }
  }
  &[data-showing='true'] {
    background-color: rgba(0, 0, 0, 0.7);

    .bottomsheet-body {
      transform: translateY(0%);
    }
  }
}
</style>
