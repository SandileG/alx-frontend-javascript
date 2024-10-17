const _cloneCar = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car
  [_cloneCar]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  cloneCar() {
    return this[_cloneCar]();
  }
}
