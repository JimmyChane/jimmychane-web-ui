import { definePopoverStore, defineUsePopover } from '@chanzor/vue-popover';
import { defineStore } from 'pinia';

export const usePopoverStore = defineStore('popover', () => definePopoverStore());

export const usePopover = defineUsePopover({ getStore: () => usePopoverStore() });
