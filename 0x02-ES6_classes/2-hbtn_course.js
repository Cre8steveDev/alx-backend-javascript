export default class HolbertonCourse {
  constructor(name, length, students = []) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array of string');
    }

    if (students.length > 0 && typeof students[0] !== 'string') {
      throw TypeError('Elements in the array must be strings ');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw TypeError('Students must be an array of string');
    }

    if (newStudents.length > 0 && typeof newStudents[0] !== 'string') {
      throw TypeError('Elements in the array must be strings ');
    }
    this._students = newStudents;
  }
}
