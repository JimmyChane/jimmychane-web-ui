let last = 0;

export function newKey() {
  let now: number = Date.now();

  while (last >= now) {
    now++;
  }

  last = now;
  return now;
}
