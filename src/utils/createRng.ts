function stringToSeed(seed: string): number {
  let h = 0;

  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i);
  }

  return h >>> 0;
}

export function createRng(seed: string) {
  let value = stringToSeed(seed);

  return () => {
    value = (value * 1664525 + 1013904223) % 4294967296;
    return value / 4294967296;
  };
}
