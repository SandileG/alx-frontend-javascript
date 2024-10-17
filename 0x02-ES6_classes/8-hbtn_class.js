export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Overriding the behavior when casst to a Number
  valueOf() {
    return this._size;
  }

  // Overridin the behavior when cast to a String
  toString() {
    return this._location;
  }
}
