// export default function cleanSet(set, startString) {
//   //   if (startString === '') return '';
//   const myStr = [];
//   for (const item of set) {
//     if (item.startsWith(startString) && startString !== '') {
//       let newStr = item;
//       newStr = newStr.replaceAll(startString, '');
//       myStr.push(newStr);
//     }
//   }

//   return myStr.join('-');
// }
/* eslint-disable array-callback-return */
export default function cleanSet(set, string) {
  if (string === undefined || string.length === 0) {
    return '';
  }
  return [...set]
    .filter((str) => (str !== undefined ? str.startsWith(string) : ''))
    .map((str) => (str !== undefined ? str.slice(string.length) : ''))
    .join('-');
}
