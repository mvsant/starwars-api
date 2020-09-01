// Alternative in case of Object.keys() fails

export function pusher(array) {
  let result = [];
  for (const item in array) {
    result.push(array[item]);
  }
  return result;
}

export function dummy(array) {
  return array;
}
export function keyMapper(array) {
  let map = pusher(array);
  let keys = [];
  for (let key in map[0]) {
    keys.push(key);
  }
  return keys;
}
