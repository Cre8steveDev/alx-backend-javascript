export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    if (idx) {
      const value = array[idx];
      // eslint-disable-next-line no-param-reassign
      array[idx] = appendString + value;
    }
  }

  return array;
}
