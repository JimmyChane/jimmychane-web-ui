<script setup lang="ts">
import { wait } from '@chanzor/utils';
import { onMounted, onUnmounted, ref, watch } from 'vue';

import type { DialogPopupModel } from '@/stores/dialog-popup/DialogPopup.model';

import AppDismissableContainer from './AppDismissableContainer.vue';

const props = defineProps<{ dialogPopup: DialogPopupModel }>();

let dismissTime = 0;

const preventKeyDown = ref(false);
const componentRef = ref();

const close = async () => {
  preventKeyDown.value = true;
  const time = (dismissTime = Date.now());
  if (props.dialogPopup.onBeforeClose) {
    const toClose = await props.dialogPopup.onBeforeClose(props.dialogPopup);
    if (time !== dismissTime) return;

    await wait();
    if (time !== dismissTime) return;

    if (!toClose) {
      preventKeyDown.value = false;
      return;
    }
  }

  props.dialogPopup.close();
};

const onKeyDown = async (e: KeyboardEvent) => {
  if (preventKeyDown.value) return;

  if (e.key === 'Escape') close();
};

const onMountComponent = async () => {
  if (!componentRef.value) return;
  if (props.dialogPopup.showingTime > 0) return;

  await props.dialogPopup.open();
  window.addEventListener('keydown', onKeyDown);
};

watch(componentRef, onMountComponent);

onMounted(onMountComponent);
onUnmounted(() => window.removeEventListener('keydown', onKeyDown));
</script>

<template>
  <AppDismissableContainer
    class="DialogPopup"
    :data-showing="`${dialogPopup.isShowing}`"
    :click-close="close"
  >
    <div class="DialogPopup-body">
      <component ref="componentRef" :is="dialogPopup.component" :dialog-popup="dialogPopup" />
    </div>
  </AppDismissableContainer>
</template>

<style lang="scss" scoped>
.DialogPopup {
  --hitbox-size: 30px;

  --default-size-top: var(--hitbox-size);
  --default-size-right: var(--hitbox-size);
  --default-size-bottom: var(--hitbox-size);
  --default-size-left: var(--hitbox-size);

  background-color: rgba(0, 0, 0, 0.5);

  transition:
    background-color,
    opacity 200ms ease;

  @media (max-width: 500px) {
    --hitbox-size: 10px;
  }
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(1px);
    backdrop-filter: blur(1px);
  }

  .DialogPopup-body {
    height: 100%;
    width: 100%;
    max-width: max-content;
    max-height: max-content;

    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;

    background: var(--el-bg-color);
    box-shadow: 0.2rem 0.4rem 1rem 1rem var(--el-box-shadow);
    border: 1px solid var(--el-border-color-lighter);

    overflow: hidden;
    transition: all 200ms ease;
  }

  &[data-showing='false'] {
    pointer-events: none;
    opacity: 0;
    .DialogPopup-body {
      pointer-events: none;
      transform: scale(0.95);
    }
  }
  &[data-showing='true'] {
    pointer-events: all;
    opacity: 1;
    .DialogPopup-body {
      pointer-events: all;
      transform: scale(1);
    }
  }
}
</style>
