export default function cleanSet(set, startString) {
  //   if (startString === '') return '';
  const myStr = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString !== '') {
      let newStr = item;
      newStr = newStr.replaceAll(startString, '');
      myStr.push(newStr);
    }
  }

  return myStr.join('-');
}
