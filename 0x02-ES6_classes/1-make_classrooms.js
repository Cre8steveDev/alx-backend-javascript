/* eslint-disable import/extensions */
import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const objectArray = [];

  for (const num of [19, 20, 34]) {
    const obj = new ClassRoom(num);

    objectArray.push(obj);
  }

  return objectArray;
}
