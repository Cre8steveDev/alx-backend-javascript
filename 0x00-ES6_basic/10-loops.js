export default function appendToEachArrayValue(array, appendString) {
  const newArr = array;
  for (const idx in newArr) {
    if (idx) {
      const value = newArr[idx];
      newArr[idx] = appendString + value;
    }
  }

  return array;
}
