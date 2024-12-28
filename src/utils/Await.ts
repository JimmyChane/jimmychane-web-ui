import { wait } from '@chanzor/utils';
import { nextTick } from 'vue';

export async function waitFrame() {
  await new Promise((r) => requestAnimationFrame(r));
  await new Promise((r) => nextTick(() => r(undefined)));
  await wait();
}
