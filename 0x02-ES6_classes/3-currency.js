// 3-currency.js
export default class Currency {
  constructor(code, name) {
    this.code = code; // Using setter to validate
    this.name = name; // Using setter to validate
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to return the full currency description
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
