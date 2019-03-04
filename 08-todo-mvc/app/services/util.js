let INC = 0;
export function simpleUID() {
  return Date.now().toString(32) + '.' + (INC++).toString(32);
}

export function findIndex(array, predicate) {
  for(let i = 0; i < array.length; i++) {
    if (predicate(array[i], i)) return i;
  }
  return -1;
}