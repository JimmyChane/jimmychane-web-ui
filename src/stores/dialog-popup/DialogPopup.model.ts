import { waitMs } from '@chanzor/utils';
import { waitFrame } from '@chanzor/vue-utils';
import { type Component, markRaw } from 'vue';

export interface DialogPopupOption<P = any> {
  prop?: P;
  component: Component;
  closeOnPageChange?: boolean;
  onAfterOpen?: (dialogPopup: DialogPopupModel<P>) => void;
  onAfterClose?: (dialogPopup: DialogPopupModel<P>) => void;
}
export type DialogPopupProp<P = void> = { dialogPopup: DialogPopupModel<P> };

export class DialogPopupModel<P = any> {
  prop: P;
  readonly component: Component;
  readonly closeOnPageChange: boolean;
  readonly onOpened?: (dialogPopup: this) => void;
  readonly onClosed?: (dialogPopup: this) => void;

  onBeforeClose?: (dialogPopup: this) => boolean | Promise<boolean>;
  beforeCloseTime = 0;

  isShowing = false;
  isClosing = false;

  showingTime = 0;
  closingTime = 0;

  constructor(
    readonly siblings: DialogPopupModel[],
    readonly id: string,
    option: DialogPopupOption<P>,
  ) {
    this.component = markRaw(option.component);
    this.prop = option.prop as P;
    this.closeOnPageChange = option.closeOnPageChange ?? true;
    this.onOpened = option.onAfterOpen;
    this.onClosed = option.onAfterClose;
  }

  async open(): Promise<boolean> {
    await waitFrame();

    if (this.showingTime > 0) return false;

    this.showingTime = Date.now();

    if (this.isClosing) return false;
    if (this.isShowing) return false;

    this.isShowing = true;

    if (this.onOpened) this.onOpened(this);

    return true;
  }

  async beforeClose(): Promise<boolean> {
    const time = (this.beforeCloseTime = Date.now());
    if (this.onBeforeClose) {
      const toClose = await this.onBeforeClose(this);
      if (time !== this.beforeCloseTime) return false;
      if (!toClose) return false;
    }

    return this.close();
  }

  async close(): Promise<boolean> {
    if (this.closingTime > 0) return false;
    if (this.isClosing) return false;
    if (!this.isShowing) return false;

    this.isClosing = true;

    this.showingTime = Date.now();

    this.isShowing = false;
    if (this.onClosed) this.onClosed(this);

    await waitMs(400);
    await waitFrame();

    const index = this.siblings.indexOf(this as unknown as DialogPopupModel);
    this.siblings.splice(index, 1);

    return true;
  }
}
