import { wait } from '@chanzor/utils';
import { waitFrame } from '@chanzor/vue-utils';
import { type Component, markRaw } from 'vue';

export enum PopoverWidth {
  AUTO = 0,
  MIN = 1,
  MAX = 2,
  SAME = 3,
}
export enum PopoverCorner {
  AUTO = 0,

  TOP,
  RIGHT,
  BOTTOM,
  LEFT,

  TOP_LEFT,
  TOP_RIGHT,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,

  TOP_LEAN_LEFT,
  TOP_LEAN_RIGHT,
  BOTTOM_LEAN_LEFT,
  BOTTOM_LEAN_RIGHT,
  LEFT_LEAN_TOP,
  LEFT_LEAN_BOTTOM,
  RIGHT_LEAN_TOP,
  RIGHT_LEAN_BOTTOM,
}
export enum PopoverAlignment {
  AUTO,
  DIANGLE,
  VERTICAL,
  HORIZONTAL,
}

export interface PopoverOption<D = undefined> {
  anchor: HTMLElement;
  width?: PopoverWidth;
  corner?: PopoverCorner;
  alignment?: PopoverAlignment;

  data: D;
  component: Component;
  closeOnPageChange?: boolean;
  onOpened?: (popover: PopoverModel<D>) => void;
  onClosed?: (popover: PopoverModel<D>) => void;
}

export class PopoverModel<D = undefined> {
  data: D;
  readonly component: Component;
  readonly closeOnPageChange: boolean;
  readonly onOpened?: (dialogPopup: this) => void;
  readonly onClosed?: (dialogPopup: this) => void;

  onBeforeClose?: (dialogPopup: this) => boolean | Promise<boolean>;
  beforeCloseTime = 0;

  anchor: HTMLElement;

  width: PopoverWidth;
  corner: PopoverCorner;
  alignment?: PopoverAlignment;

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(
    readonly siblings: PopoverModel[],
    readonly id: string,
    option: PopoverOption<D>,
  ) {
    this.component = markRaw(option.component);

    this.anchor = option.anchor;
    this.width = option?.width ?? PopoverWidth.AUTO;
    this.corner = option?.corner ?? PopoverCorner.AUTO;

    this.data = option.data as D;
    this.closeOnPageChange = option.closeOnPageChange ?? true;
    this.onOpened = option.onOpened;
    this.onClosed = option.onClosed;
  }

  async open(): Promise<void> {
    await waitFrame();

    if (this.showingTime > 0) return;

    this.showingTime = Date.now();

    if (this.isClosing || this.isShowing) return;

    this.isShowing = true;

    if (this.onOpened) this.onOpened(this);
  }

  async beforeClose(): Promise<void> {
    const time = (this.beforeCloseTime = Date.now());
    if (this.onBeforeClose) {
      const toClose = await this.onBeforeClose(this);
      if (time !== this.beforeCloseTime) return;
      if (!toClose) return;
    }

    await this.close();
  }

  async close(): Promise<void> {
    if (this.closingTime > 0 || this.isClosing || !this.isShowing) return;

    this.isClosing = true;

    this.showingTime = Date.now();

    this.isShowing = false;
    if (this.onClosed) this.onClosed(this);

    await wait(150);
    await waitFrame();

    const index = this.siblings.indexOf(this as unknown as PopoverModel);
    this.siblings.splice(index, 1);
  }
}
