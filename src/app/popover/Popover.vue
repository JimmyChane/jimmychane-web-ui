<script setup lang="ts">
import { wait } from '@chanzor/utils';
import { computedAsync, onClickOutside, useElementBounding, useWindowSize } from '@vueuse/core';
import { type CSSProperties, computed, onMounted, onUnmounted, ref, watch } from 'vue';

import {
  PopoverAlignment,
  PopoverCorner,
  type PopoverProps,
  PopoverWidth,
} from '@/stores/popover.store';

const props = defineProps<PopoverProps>();

let onHide: ((e: Event | UIEvent) => void) | undefined;

const selfRef = ref<HTMLDivElement>();
const componentRef = ref();

const isMounted = ref(false);
const isUnmounted = ref(false);
const isShowing = computed(() => props.popover.isShowing);

const width = computed(() => {
  switch (props.popover.width) {
    case PopoverWidth.MIN:
      return 'min-content';
    case PopoverWidth.MAX:
      return 'max-content';
    case PopoverWidth.SAME:
      return `${anchorWidthPx.value}px`;
  }
});
const minWidth = computed(() => {
  switch (props.popover.width) {
    case PopoverWidth.MIN:
      return 'min-content';
    case PopoverWidth.MAX:
      return `${anchorWidthPx.value}px`;
    case PopoverWidth.SAME:
      return `${anchorWidthPx.value}px`;
  }
});

const classDirection = computed(() => {
  switch (calculatedCorner.value) {
    case PopoverCorner.TOP:
      return 'Popover-Top';
    case PopoverCorner.RIGHT:
      return 'Popover-Right';
    case PopoverCorner.BOTTOM:
      return 'Popover-Bottom';
    case PopoverCorner.LEFT:
      return 'Popover-Left';
    case PopoverCorner.TOP_LEFT:
      return 'Popover-TopLeft';
    case PopoverCorner.TOP_RIGHT:
      return 'Popover-TopRight';
    case PopoverCorner.BOTTOM_LEFT:
      return 'Popover-BottomLeft';
    case PopoverCorner.BOTTOM_RIGHT:
      return 'Popover-BottomRight';
    case PopoverCorner.TOP_LEAN_LEFT:
      return 'Popover-Top-Lean-Left';
    case PopoverCorner.TOP_LEAN_RIGHT:
      return 'Popover-Top-Lean-Right';
    case PopoverCorner.BOTTOM_LEAN_LEFT:
      return 'Popover-Bottom-Lean-Left';
    case PopoverCorner.BOTTOM_LEAN_RIGHT:
      return 'Popover-Bottom-Lean-Right';
    case PopoverCorner.LEFT_LEAN_TOP:
      return 'Popover-Left-Lean-Top';
    case PopoverCorner.LEFT_LEAN_BOTTOM:
      return 'Popover-Left-Lean-Bottom';
    case PopoverCorner.RIGHT_LEAN_TOP:
      return 'Popover-Right-Lean-Top';
    case PopoverCorner.RIGHT_LEAN_BOTTOM:
      return 'Popover-Right-Lean-Bottom';
  }
});

const transition = computed(() => {
  if (isMounted.value || isShowing.value) return 'all 150ms ease-in-out';
});

const { width: windowWidth, height: windowHeight } = useWindowSize();
const windowWidthHalf = computed(() => windowWidth.value / 2);
const windowHeightHalf = computed(() => windowHeight.value / 2);

const calculatedAlignment = computed(() => {
  switch (props.popover.alignment) {
    case PopoverAlignment.VERTICAL:
      return {
        vertical:
          anchorTopPx.value > windowHeightHalf.value ? PopoverCorner.TOP : PopoverCorner.BOTTOM,
      };
    case PopoverAlignment.HORIZONTAL:
      return {
        horizontal:
          anchorLeftPx.value > windowWidthHalf.value ? PopoverCorner.LEFT : PopoverCorner.RIGHT,
      };
    default:
    case PopoverAlignment.AUTO:
    case PopoverAlignment.DIANGLE:
      return {
        vertical:
          anchorTopPx.value > windowHeightHalf.value ? PopoverCorner.TOP : PopoverCorner.BOTTOM,
        horizontal:
          anchorLeftPx.value > windowWidthHalf.value ? PopoverCorner.LEFT : PopoverCorner.RIGHT,
      };
  }
});
const calculatedCorner = computed<PopoverCorner | undefined>(() => {
  switch (props.popover.corner) {
    case PopoverCorner.TOP:
    case PopoverCorner.RIGHT:
    case PopoverCorner.BOTTOM:
    case PopoverCorner.LEFT:
    case PopoverCorner.TOP_LEFT:
    case PopoverCorner.TOP_RIGHT:
    case PopoverCorner.BOTTOM_LEFT:
    case PopoverCorner.BOTTOM_RIGHT:
    case PopoverCorner.TOP_LEAN_LEFT:
    case PopoverCorner.TOP_LEAN_RIGHT:
    case PopoverCorner.BOTTOM_LEAN_LEFT:
    case PopoverCorner.BOTTOM_LEAN_RIGHT:
    case PopoverCorner.LEFT_LEAN_TOP:
    case PopoverCorner.LEFT_LEAN_BOTTOM:
    case PopoverCorner.RIGHT_LEAN_TOP:
    case PopoverCorner.RIGHT_LEAN_BOTTOM:
      return props.popover.corner;
    default:
    case PopoverCorner.AUTO:
      const { vertical, horizontal } = calculatedAlignment.value;

      if (vertical === PopoverCorner.TOP && horizontal === undefined) return PopoverCorner.TOP;
      if (vertical === PopoverCorner.BOTTOM && horizontal === undefined)
        return PopoverCorner.BOTTOM;
      if (vertical === undefined && horizontal === PopoverCorner.LEFT) return PopoverCorner.LEFT;
      if (vertical === undefined && horizontal === PopoverCorner.RIGHT) return PopoverCorner.RIGHT;
      if (vertical === PopoverCorner.TOP && horizontal === PopoverCorner.LEFT)
        return PopoverCorner.TOP_LEFT;
      if (vertical === PopoverCorner.TOP && horizontal === PopoverCorner.RIGHT)
        return PopoverCorner.TOP_RIGHT;
      if (vertical === PopoverCorner.BOTTOM && horizontal === PopoverCorner.LEFT)
        return PopoverCorner.BOTTOM_LEFT;
      if (vertical === PopoverCorner.BOTTOM && horizontal === PopoverCorner.RIGHT)
        return PopoverCorner.BOTTOM_RIGHT;
  }
});
const positionCornerPx = computed<{ x: number; y: number }>(() => {
  switch (calculatedCorner.value) {
    case PopoverCorner.TOP:
      return { x: anchorLeftPx.value + anchorWidthHalf.value, y: anchorTopPx.value };
    case PopoverCorner.RIGHT:
      return {
        x: anchorLeftPx.value + anchorWidthPx.value,
        y: anchorTopPx.value + anchorHeightHalf.value,
      };
    case PopoverCorner.BOTTOM:
      return {
        x: anchorLeftPx.value + anchorWidthHalf.value,
        y: anchorTopPx.value + anchorHeightPx.value,
      };
    case PopoverCorner.LEFT:
      return { x: anchorLeftPx.value, y: anchorTopPx.value + anchorHeightHalf.value };
    case PopoverCorner.TOP_LEFT:
    case PopoverCorner.TOP_LEAN_LEFT:
    case PopoverCorner.LEFT_LEAN_TOP:
      return { x: anchorLeftPx.value, y: anchorTopPx.value };
    case PopoverCorner.TOP_RIGHT:
    case PopoverCorner.TOP_LEAN_RIGHT:
    case PopoverCorner.RIGHT_LEAN_TOP:
      return { x: anchorLeftPx.value + anchorWidthPx.value, y: anchorTopPx.value };
    case PopoverCorner.BOTTOM_LEFT:
    case PopoverCorner.BOTTOM_LEAN_LEFT:
    case PopoverCorner.LEFT_LEAN_BOTTOM:
      return { x: anchorLeftPx.value, y: anchorTopPx.value + anchorHeightPx.value };
    case PopoverCorner.BOTTOM_RIGHT:
    case PopoverCorner.BOTTOM_LEAN_RIGHT:
    case PopoverCorner.RIGHT_LEAN_BOTTOM:
      return {
        x: anchorLeftPx.value + anchorWidthPx.value,
        y: anchorTopPx.value + anchorHeightPx.value,
      };
    default:
      return { x: 0, y: 0 };
  }
});

const pointerEvent = computedAsync(async () => {
  if (isShowing.value) {
    await wait(150);
    return 'all';
  }

  return 'none';
});

const style = computed<CSSProperties>(() => {
  return {
    '--anchor-width': `${anchorWidthPx.value}px`,
    '--anchor-height': `${anchorHeightPx.value}px`,
    '--anchor-half-width': `${anchorWidthHalf.value}px`,
    '--anchor-half-height': `${anchorHeightHalf.value}px`,
    '--x': `${positionCornerPx.value.x}px`,
    '--y': `${positionCornerPx.value.y}px`,
    width: width.value,
    minWidth: minWidth.value,
    transition: transition.value,
    pointerEvents: pointerEvent.value,
  };
});

const {
  width: anchorWidthPx,
  height: anchorHeightPx,
  top: anchorTopPx,
  left: anchorLeftPx,
} = useElementBounding(props.popover.anchor);
const anchorWidthHalf = computed(() => anchorWidthPx.value / 2);
const anchorHeightHalf = computed(() => anchorHeightPx.value / 2);

async function onMountComponent() {
  if (!componentRef.value) return;
  if (props.popover.showingTime > 0) return;

  await props.popover.open();
  isMounted.value = true;

  await wait(1000);

  if (!isUnmounted.value) {
    onHide = (event: Event | UIEvent) => {
      if (selfRef.value && event.target instanceof Node) {
        if (selfRef.value.contains(event.target)) return;
      }
      props.popover.close();
    };
    window.addEventListener('scroll', onHide, true);
    window.addEventListener('resize', onHide, true);
  }
}

onClickOutside(selfRef, () => {
  if (isShowing.value) props.popover.close();
});

watch(componentRef, onMountComponent);

onMounted(() => onMountComponent());
onUnmounted(() => {
  isUnmounted.value = true;

  if (onHide) {
    window.removeEventListener('scroll', onHide, true);
    window.removeEventListener('resize', onHide, true);
    onHide = undefined;
  }
});
</script>

<template>
  <div
    ref="selfRef"
    class="Popover"
    :class="classDirection"
    :style="style"
    :data-showing="isShowing"
  >
    <div class="Popover-body">
      <component ref="componentRef" :is="popover.component" :popover="popover" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Popover {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  overflow: hidden;

  min-width: max-content;
  width: max-content;
  height: max-content;
  max-height: 20em;
  text-align: center;

  border-radius: 0.5em;
  box-shadow: 0.2rem 0.4rem 0.5rem 0 hsla(0, 0%, 0%, 0.2);
  border: 1px solid var(--el-border-color-lighter);
  color: var(--el-text-color-primary);

  background-color: var(--el-bg-color);

  position: fixed;
  top: var(--y);
  left: var(--x);

  .Popover-body {
    height: max-content;
    width: max-content;
    max-width: max-content;
    max-height: max-content;

    display: flex;
    flex-direction: column;

    overflow: hidden;
    transition: all 150ms ease-in-out;
  }
}

.Popover[data-showing='false'] {
  opacity: 0;
  transform: var(--transform-start);

  .Popover-body {
    transform: scale(0.95);
  }
}
.Popover[data-showing='true'] {
  opacity: 1;
  transform: var(--transform-end);

  .Popover-body {
    transform: scale(1);
  }
}

.Popover-Top {
  --transform-start: translateX(calc(0px - 50%))
    translateY(calc(0px - 100% + var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - 50%)) translateY(calc(0px - 100%));
}
.Popover-Right {
  --transform-start: translateX(calc(0px - var(--anchor-half-width))) translateY(calc(0px - 50%));
  --transform-end: translateX(calc(0px)) translateY(calc(0px - 50%));
}
.Popover-Bottom {
  --transform-start: translateX(calc(0px - 50%)) translateY(calc(0px - var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - 50%)) translateY(0px);
}
.Popover-Left {
  --transform-start: translateX(calc(0px - 100% + var(--anchor-half-width)))
    translateY(calc(0px - 50%));
  --transform-end: translateX(calc(0px - 100%)) translateY(calc(0px - 50%));
}

.Popover-TopLeft {
  --transform-start: translateX(calc(0px - 100% + var(--anchor-half-width)))
    translateY(calc(0px - 100% + var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - 100% + calc(var(--anchor-half-width) * 0.5)))
    translateY(calc(0px - 100% + calc(var(--anchor-half-height) * 0.5)));
}
.Popover-TopRight {
  --transform-start: translateX(calc(0px - var(--anchor-half-width)))
    translateY(calc(0px - 100% + var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - calc(var(--anchor-half-width) * 0.5)))
    translateY(calc(0px - 100% + calc(var(--anchor-half-height) * 0.5)));
}
.Popover-BottomLeft {
  --transform-start: translateX(calc(0px - 100% + var(--anchor-half-width)))
    translateY(calc(0px - var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - 100% + calc(var(--anchor-half-width) * 0.5)))
    translateY(calc(0px - calc(var(--anchor-half-height) * 0.5)));
}
.Popover-BottomRight {
  --transform-start: translateX(calc(0px - var(--anchor-half-width)))
    translateY(calc(0px - var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - calc(var(--anchor-half-width) * 0.5)))
    translateY(calc(0px - calc(var(--anchor-half-height) * 0.5)));
}

.Popover-Top-Lean-Left {
  --transform-start: translateX(0px) translateY(calc(0px - 100%));
  --transform-end: translateX(0px) translateY(calc(0px - 100% - 0.5rem - var(--anchor-height)));
}

.Popover-Top-Lean-Right {
  --transform-start: translateX(calc(0px - 100%)) translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px - 100%))
    translateY(calc(0px - 100% - 0.5rem - var(--anchor-height)));
}

.Popover-Bottom-Lean-Left {
  --transform-start: translateX(0px) translateY(calc(0px - var(--anchor-height)));
  --transform-end: translateX(0px) translateY(calc(0px + 0.5rem));
}

.Popover-Bottom-Lean-Right {
  --transform-start: translateX(calc(0px - 100%)) translateY(calc(0px - var(--anchor-height)));
  --transform-end: translateX(calc(0px - 100%)) translateY(calc(0px + 0.5rem));
}

.Popover-Left-Lean-Top {
  --transform-start: translateX(calc(0px - 100% - 0.5rem + var(--anchor-width)))
    translateY(calc(0px - var(--anchor-height)));
  --transform-end: translateX(calc(0px - 100% - 0.5rem))
    translateY(calc(0px - var(--anchor-height)));
}

.Popover-Left-Lean-Bottom {
  --transform-start: translateX(calc(0px - 100% - 0.5rem + var(--anchor-width)))
    translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px - 100% - 0.5rem)) translateY(calc(0px - 100%));
}

.Popover-Right-Lean-Top {
  --transform-start: translateX(calc(0px + 0.5rem - var(--anchor-width)))
    translateY(calc(0px - var(--anchor-height)));
  --transform-end: translateX(calc(0px + 0.5rem)) translateY(calc(0px - var(--anchor-height)));
}

.Popover-Right-Lean-Bottom {
  --transform-start: translateX(calc(0px + 0.5rem - var(--anchor-width)))
    translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px + 0.5rem)) translateY(calc(0px - 100%));
}
</style>
