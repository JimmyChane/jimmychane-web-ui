import { wait, waitFrame } from '@/utils/Await';
import { defineStore } from 'pinia';
import { markRaw, ref, type Component } from 'vue';
import { useAppStore } from '@/stores/app.store';

export type BottomsheetProps<D = undefined> = {
  bottomsheet: Bottomsheet<D>;
};

export interface BottomsheetOption<D = undefined> {
  data?: D;
  component: Component;
}

export class Bottomsheet<D = undefined> {
  data: D;

  readonly id: string;
  readonly component: Component;

  readonly siblings: Bottomsheet[];

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(id: string, siblings: Bottomsheet[], option: BottomsheetOption<D>) {
    this.id = id;
    this.siblings = siblings;
    this.component = markRaw(option.component);
    this.data = option.data as D;
  }

  async open(): Promise<boolean> {
    await waitFrame();

    if (this.showingTime > 0) return false;

    this.showingTime = Date.now();

    if (this.isClosing) return false;
    if (this.isShowing) return false;

    this.isShowing = true;

    return true;
  }

  async close(): Promise<boolean> {
    if (this.closingTime > 0) return false;
    if (this.isClosing) return false;
    if (!this.isShowing) return false;

    this.isClosing = true;

    this.showingTime = Date.now();

    this.isShowing = false;

    await wait(1000);

    const index = this.siblings.indexOf(this as unknown as Bottomsheet);
    this.siblings.splice(index, 1);

    return true;
  }
}

export const useBottomsheetStore = defineStore('bottomsheet', () => {
  useAppStore().useBottomsheetComponent = true;

  const items = ref<Bottomsheet[]>([]);

  function open<D>(key: string, option: BottomsheetOption<D>): Bottomsheet<D> {
    const existingItem = items.value.find((item) => item.id === key) as Bottomsheet | undefined;
    if (existingItem) return existingItem as unknown as Bottomsheet<D>;

    const item = new Bottomsheet<D>(key, items.value as Bottomsheet[], option);
    items.value.push(item as unknown as Bottomsheet);
    return item;
  }

  function find<T>(key: string): Bottomsheet<T> | undefined {
    return items.value.find((item) => item.id === key) as Bottomsheet<T> | undefined;
  }

  return { items, open, find };
});
