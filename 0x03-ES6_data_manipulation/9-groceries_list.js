export default function groceriesList() {
  const groceryList = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  const myMap = new Map();

  const groceryListKeys = Object.entries(groceryList);

  groceryListKeys.forEach((grocery) => {
    myMap.set(grocery[0], grocery[1]);
  });

  return myMap;
}
