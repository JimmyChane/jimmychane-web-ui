<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import DismissableContainer from './DismissableContainer.vue';
import type { DialogProps } from '@chanzor/vue-utils';

const emits = defineEmits<{ clickShow: [void]; clickDismiss: [void] }>();
const props = defineProps<DialogProps>();

let dismissTime = 0;

const preventKeyDown = ref(false);

async function dismiss() {
  preventKeyDown.value = true;
  const time = (dismissTime = Date.now());
  if (props.dialog.onBeforeClose) {
    const toClose = await props.dialog.onBeforeClose(props.dialog);
    if (time !== dismissTime) return;

    await new Promise((r) => setTimeout(r, 0));
    if (time !== dismissTime) return;

    if (!toClose) {
      preventKeyDown.value = false;
      return;
    }
  }

  props.dialog.close();
}

async function onKeyDown(e: KeyboardEvent) {
  if (preventKeyDown.value) return;

  if (e.key === 'Escape') dismiss();
}

onMounted(() => {
  props.dialog.open();
  window.addEventListener('keydown', onKeyDown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown);
});
</script>

<template>
  <DismissableContainer
    class="dialog"
    :data-showing="`${dialog.isShowing}`"
    @click-dismiss="() => dismiss()"
  >
    <div class="dialog-body">
      <component :is="dialog.component" :dialog="dialog" />
    </div>
  </DismissableContainer>
</template>

<style lang="scss" scoped>
.dialog {
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

  .dialog-body {
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
    .dialog-body {
      pointer-events: none;
      transform: scale(0.95);
    }
  }
  &[data-showing='true'] {
    pointer-events: all;
    opacity: 1;
    .dialog-body {
      pointer-events: all;
      transform: scale(1);
    }
  }
}
</style>
