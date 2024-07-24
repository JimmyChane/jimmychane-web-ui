import { useThrottleFn, useWindowSize } from '@vueuse/core';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';

export const useWindowStore = defineStore('window', () => {
  const width = ref(0);
  const isSmallerThanTablet = computed(() => width.value <= 650);
  const isLargerThanMobile = computed(() => width.value >= 650);
  const isLargerThanTablet = computed(() => width.value > 1200);

  const onWidthChange = useThrottleFn(
    (windowWidth: number) => (width.value = windowWidth),
    200,
    true,
  );

  const { width: windowWidth } = useWindowSize();
  watch(() => windowWidth.value, onWidthChange);
  onWidthChange(windowWidth.value);

  return {
    width: computed(() => width.value),
    isSmallerThanTablet,
    isLargerThanMobile,
    isLargerThanTablet,
  };
});
