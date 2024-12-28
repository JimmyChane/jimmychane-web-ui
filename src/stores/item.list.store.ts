import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { LinearQueue } from '@chanzor/utils';
import type { MaybePromise } from '@chanzor/utils';

export interface Item {
  id: string;
}

export interface ListableOption<T extends Item> {
  fetchList(): MaybePromise<T[]>;
}

export interface ListableStore<T extends Item = Item> {
  readonly timeFetched: number;
  readonly items: T[];
  readonly isLoading: boolean;

  refreshItems(): Promise<void>;
  getItems(): Promise<T[]>;
  findItemById(id: string | ((item: T) => boolean)): Promise<T | undefined>;
  findItemsByIds(ids: string[]): Promise<(T | string)[]>;
}

export function defineListableStore<T extends Item>(id: string, option: ListableOption<T>) {
  return defineStore(id, () => {
    const { fetchList } = option;

    const CACHE_EXPIRY = 1000 * 60 * 60; // 60min
    const queue = new LinearQueue();

    const timeFetched = ref(0);
    const items = ref<T[]>([]);
    const isLoading = ref(false);

    async function refreshItems(): Promise<void> {
      return queue.next(async () => {
        const now = Date.now();

        if (now > timeFetched.value + CACHE_EXPIRY) {
          isLoading.value = true;
          const list = await fetchList();
          items.value.splice(0);
          (items.value as T[]).push(...list);
          timeFetched.value = Date.now();
          isLoading.value = false;
        }
      });
    }
    async function getItems(): Promise<T[]> {
      if (timeFetched.value === 0) await refreshItems();

      return items.value as T[];
    }
    async function findItemById(id: string | ((item: T) => boolean)): Promise<T | undefined> {
      const items = await getItems();

      if (typeof id === 'function') {
        return items.find(id);
      } else {
        const item = items.find((item) => item.id === id);
        return item as T | undefined;
      }
    }
    async function findItemsByIds(ids: string[]): Promise<(T | string)[]> {
      const items = await getItems();
      return ids.map((id) => {
        const item = items.find((item) => item.id === id);
        return item ? item : id;
      });
    }

    return {
      timeFetched: computed(() => timeFetched.value) as unknown as number,
      items: computed(() => items.value) as unknown as T[],
      isLoading: computed(() => isLoading.value) as unknown as boolean,
      refreshItems,
      getItems,
      findItemById,
      findItemsByIds,
    } as ListableStore<T>;
  });
}
