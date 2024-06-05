export default function hasValuesFromArray(set, array = []) {
  return array.every((itemInArray) => set.has(itemInArray) === true);
}
