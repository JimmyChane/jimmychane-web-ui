<script setup lang="ts">
import { waitMs } from '@chanzor/utils';
import type { PopoverCornerType, PopoverProps } from '@chanzor/vue-popover';
import { computedAsync, onClickOutside, useElementBounding, useWindowSize } from '@vueuse/core';
import { type CSSProperties, computed, onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps<PopoverProps>();

let onHide: ((e: Event | UIEvent) => void) | undefined;

const selfRef = ref<HTMLDivElement>();
const componentRef = ref();

const isMounted = ref(false);
const isUnmounted = ref(false);
const isShowing = computed(() => props.popover.isShowing);

const width = computed(() => {
  switch (props.popover.width) {
    case 'min':
      return 'min-content';
    case 'max':
      return 'max-content';
    case 'same':
      return `${anchorWidthPx.value}px`;
  }
  return undefined;
});
const minWidth = computed(() => {
  switch (props.popover.width) {
    case 'min':
      return 'min-content';
    case 'max':
      return `${anchorWidthPx.value}px`;
    case 'same':
      return `${anchorWidthPx.value}px`;
  }
  return undefined;
});

const classDirection = computed(() => {
  switch (calculatedCorner.value) {
    case 'top':
      return 'Popover-Top';
    case 'right':
      return 'Popover-Right';
    case 'bottom':
      return 'Popover-Bottom';
    case 'left':
      return 'Popover-Left';
    case 'top-left':
      return 'Popover-TopLeft';
    case 'top-right':
      return 'Popover-TopRight';
    case 'bottom-left':
      return 'Popover-BottomLeft';
    case 'bottom-right':
      return 'Popover-BottomRight';
    case 'top-lean-left':
      return 'Popover-Top-Lean-Left';
    case 'top-lean-right':
      return 'Popover-Top-Lean-Right';
    case 'bottom-lean-left':
      return 'Popover-Bottom-Lean-Left';
    case 'bottom-lean-right':
      return 'Popover-Bottom-Lean-Right';
    case 'left-lean-top':
      return 'Popover-Left-Lean-Top';
    case 'left-lean-bottom':
      return 'Popover-Left-Lean-Bottom';
    case 'right-lean-top':
      return 'Popover-Right-Lean-Top';
    case 'right-lean-bottom':
      return 'Popover-Right-Lean-Bottom';
  }
  return undefined;
});

const transition = computed(() => {
  if (isMounted.value || isShowing.value) return 'all 150ms ease-in-out';
  return undefined;
});

const { width: windowWidth, height: windowHeight } = useWindowSize();
const windowWidthHalf = computed(() => windowWidth.value / 2);
const windowHeightHalf = computed(() => windowHeight.value / 2);

const calculatedAlignment = computed<{ vertical?: PopoverCornerType; horizontal?: PopoverCornerType }>(() => {
  switch (props.popover.alignment) {
    case 'vertical':
      return { vertical: anchorTopPx.value > windowHeightHalf.value ? 'top' : 'bottom' };
    case 'horizontal':
      return { horizontal: anchorLeftPx.value > windowWidthHalf.value ? 'left' : 'right' };
    default:
    case 'auto':
    case 'diangle':
      return {
        vertical: anchorTopPx.value > windowHeightHalf.value ? 'top' : 'bottom',
        horizontal: anchorLeftPx.value > windowWidthHalf.value ? 'left' : 'right',
      };
  }
});
const calculatedCorner = computed<PopoverCornerType | undefined>(() => {
  switch (props.popover.corner) {
    case 'top':
    case 'right':
    case 'bottom':
    case 'left':
    case 'top-left':
    case 'top-right':
    case 'bottom-left':
    case 'bottom-right':
    case 'top-lean-left':
    case 'top-lean-right':
    case 'bottom-lean-left':
    case 'bottom-lean-right':
    case 'left-lean-top':
    case 'left-lean-bottom':
    case 'right-lean-top':
    case 'right-lean-bottom':
      return props.popover.corner;
    default:
    case 'auto': {
      const { vertical, horizontal } = calculatedAlignment.value;

      if (vertical === 'top' && horizontal === undefined) return 'top';
      if (vertical === 'bottom' && horizontal === undefined) return 'bottom';
      if (vertical === undefined && horizontal === 'left') return 'left';
      if (vertical === undefined && horizontal === 'right') return 'right';
      if (vertical === 'top' && horizontal === 'left') return 'top-left';
      if (vertical === 'top' && horizontal === 'right') return 'top-right';
      if (vertical === 'bottom' && horizontal === 'left') return 'bottom-left';
      if (vertical === 'bottom' && horizontal === 'right') return 'bottom-right';
    }
  }
  return undefined;
});
const positionCornerPx = computed<{ x: number; y: number }>(() => {
  switch (calculatedCorner.value) {
    case 'top':
      return { x: anchorLeftPx.value + anchorWidthHalf.value, y: anchorTopPx.value };
    case 'right':
      return { x: anchorLeftPx.value + anchorWidthPx.value, y: anchorTopPx.value + anchorHeightHalf.value };
    case 'bottom':
      return { x: anchorLeftPx.value + anchorWidthHalf.value, y: anchorTopPx.value + anchorHeightPx.value };
    case 'left':
      return { x: anchorLeftPx.value, y: anchorTopPx.value + anchorHeightHalf.value };
    case 'top-left':
    case 'top-lean-left':
    case 'left-lean-top':
      return { x: anchorLeftPx.value, y: anchorTopPx.value };
    case 'top-right':
    case 'top-lean-right':
    case 'right-lean-top':
      return { x: anchorLeftPx.value + anchorWidthPx.value, y: anchorTopPx.value };
    case 'bottom-left':
    case 'bottom-lean-left':
    case 'left-lean-bottom':
      return { x: anchorLeftPx.value, y: anchorTopPx.value + anchorHeightPx.value };
    case 'bottom-right':
    case 'bottom-lean-right':
    case 'right-lean-bottom':
      return { x: anchorLeftPx.value + anchorWidthPx.value, y: anchorTopPx.value + anchorHeightPx.value };
    default:
      return { x: 0, y: 0 };
  }
});

const pointerEvent = computedAsync(async () => {
  if (isShowing.value) {
    await waitMs(150);
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

const onMountComponent = async () => {
  if (!componentRef.value) return;
  if (props.popover.showingTime > 0) return;

  await props.popover.open();
  isMounted.value = true;

  await waitMs(1000);

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
};

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
  <div ref="selfRef" class="Popover" :class="classDirection" :style="style" :data-showing="isShowing">
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
  --transform-start: translateX(calc(0px - 50%)) translateY(calc(0px - 100% + var(--anchor-half-height)));
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
  --transform-start: translateX(calc(0px - 100% + var(--anchor-half-width))) translateY(calc(0px - 50%));
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
  --transform-start: translateX(calc(0px - var(--anchor-half-width))) translateY(calc(0px - var(--anchor-half-height)));
  --transform-end: translateX(calc(0px - calc(var(--anchor-half-width) * 0.5)))
    translateY(calc(0px - calc(var(--anchor-half-height) * 0.5)));
}

.Popover-Top-Lean-Left {
  --transform-start: translateX(0px) translateY(calc(0px - 100%));
  --transform-end: translateX(0px) translateY(calc(0px - 100% - 0.5rem - var(--anchor-height)));
}

.Popover-Top-Lean-Right {
  --transform-start: translateX(calc(0px - 100%)) translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px - 100%)) translateY(calc(0px - 100% - 0.5rem - var(--anchor-height)));
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
  --transform-end: translateX(calc(0px - 100% - 0.5rem)) translateY(calc(0px - var(--anchor-height)));
}

.Popover-Left-Lean-Bottom {
  --transform-start: translateX(calc(0px - 100% - 0.5rem + var(--anchor-width))) translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px - 100% - 0.5rem)) translateY(calc(0px - 100%));
}

.Popover-Right-Lean-Top {
  --transform-start: translateX(calc(0px + 0.5rem - var(--anchor-width))) translateY(calc(0px - var(--anchor-height)));
  --transform-end: translateX(calc(0px + 0.5rem)) translateY(calc(0px - var(--anchor-height)));
}

.Popover-Right-Lean-Bottom {
  --transform-start: translateX(calc(0px + 0.5rem - var(--anchor-width))) translateY(calc(0px - 100%));
  --transform-end: translateX(calc(0px + 0.5rem)) translateY(calc(0px - 100%));
}
</style>
