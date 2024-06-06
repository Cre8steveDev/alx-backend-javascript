export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Defien variable to hold the number of times
  // the end point is called my tieing it to
  // the weak map
  let numOfCalls = 0;

  if (weakMap.has(endpoint)) numOfCalls = weakMap.get(endpoint);
  weakMap.set(endpoint, numOfCalls + 1);

  if (numOfCalls + 1 >= 5) throw new Error('Endpoint load is high');
}
