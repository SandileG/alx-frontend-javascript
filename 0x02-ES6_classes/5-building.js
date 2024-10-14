// 5-building.js
export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Using setter to validate
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft, with validation
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Square feet must be a number');
    }
    this._sqft = value;
  }
}
