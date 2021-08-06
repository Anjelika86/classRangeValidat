"use strict";

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(newFrom) {
    if (isNaN(newFrom) || typeof newFrom !== "number") {
      throw new TypeError("Invalid type");
    }
    if (newFrom > this.to && this.to !== undefined) {
      throw new RangeError("");
    }
    this._from = newFrom;
  }
  get from() {
    return this._from;
  }
  set to(newTo) {
    if (isNaN(newTo) || typeof newTo !== "number") {
      throw new TypeError("Invalid type");
    }
    if (newTo < this.from && this.from !== undefined) {
      throw new RangeError(
        "The initial value of the range must not be less than the final"
      );
    }

    this._to = newTo;
  }
  get to() {
    return this._to;
  }

  getterRange() {
    const range = [];
    {
      range.push(this.from, this.to);
    }
    return range;
  }
  validate(number) {
    if (number >= this.from && number <= this.to) {
      return number;
    }
    throw new TypeError("Invalid type");
  }
}
const range1 = new RangeValidator(12, 15);
console.log(range1);
console.log(range1.validate(12));
