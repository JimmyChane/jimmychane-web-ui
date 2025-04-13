import {
  type AsyncComponentLoader,
  type Component,
  type ComponentPublicInstance,
  computed,
  defineAsyncComponent,
  ref,
} from 'vue';

export function useAsyncComponent<
  T extends Component = { new (): ComponentPublicInstance },
>(source: AsyncComponentLoader<T>) {
  const isLoaded = ref(false);
  const isLoading = ref(false);
  const isError = ref(false);

  const Component = defineAsyncComponent({
    loader: async () => {
      isLoading.value = true;
      const component = await source();
      isLoading.value = false;
      isLoaded.value = true;

      return component;
    },
    onError: () => {
      isLoading.value = false;
      isError.value = true;
    },
  });

  return {
    Component,
    isLoaded: computed(() => isLoaded.value),
    isLoading: computed(() => isLoading.value),
    isError: computed(() => isError.value),
  };
}
