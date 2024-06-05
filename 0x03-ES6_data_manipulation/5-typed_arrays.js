export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const buffer = new ArrayBuffer(length);
  const dataView = new Int8Array(buffer);

  dataView[position] = value;

  return new DataView(buffer);
}
