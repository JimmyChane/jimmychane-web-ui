import { ref } from 'vue';

export type MaybePromise<T> = T | Promise<T>;
export type MaybeFunction<T> = T | (() => T);

// getter
export function getString(value?: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}
export function getNumber(value?: unknown): number | undefined {
  return typeof value === 'number' ? value : undefined;
}
export function getBoolean(value?: unknown): boolean | undefined {
  return typeof value === 'boolean' ? value : undefined;
}

// opter
export function optString(value?: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}
export function optNumber(value?: unknown, fallback = 0): number {
  return typeof value === 'number' ? value : fallback;
}
export function optBoolean(value?: unknown, fallback = false): boolean {
  return typeof value === 'boolean' ? value : fallback;
}
export function optArray<T>(value?: T[] | T, fallback: T[] = []): T[] {
  if (Array.isArray(value)) return value;
  if (value === undefined) return [value] as T[];
  return fallback;
}

// array getter
export function optArrayString<T>(value?: T[] | T, fallback: T[] = []): string[] {
  return optArray(value, fallback)
    .map((v) => optString(v))
    .filter((v) => v.length);
}

// isEqual
export function isArrayEqual<T extends { isEqual: (item: T) => boolean }>(
  array1: T[],
  array2: T[],
) {
  if (array1.length !== array2.length) return false;

  const accumulators1: T[] = array1.filter((item1) => {
    return !array2.find((item2) => item2.isEqual(item1));
  });
  const accumulators2: T[] = array2.filter((item2) => {
    return !array1.find((item1) => item1.isEqual(item2));
  });

  return accumulators1.length === 0 && accumulators2.length === 0;
}
export function isArrayStringEqual(array1: string[], array2: string[]) {
  if (array1.length !== array2.length) return false;

  const accumulators1 = array1.filter((str) => !array2.includes(str));
  const accumulators2 = array2.filter((str) => !array1.includes(str));

  return accumulators1.length === 0 && accumulators2.length === 0;
}

// use
export function useData<T>(value?: T) {
  const data = ref<T>();
  const isLoading = ref(false);
  let dataTime = 0;

  data.value = value;

  return {
    data,
    isLoading,
    setData: async (promise: MaybePromise<T>) => {
      const time = (dataTime = Date.now());
      isLoading.value = true;
      const xData = await promise;

      if (time === dataTime) {
        isLoading.value = false;
        data.value = xData;
      }
    },
  };
}
