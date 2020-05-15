export function eachSlice<A extends unknown[]>(array: A, n: number) {
  const chunks = [];
  while (array.length) {
    chunks.push(array.splice(0, n));
  }
  return chunks;
}
