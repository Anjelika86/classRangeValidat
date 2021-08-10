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
      throw new RangeError(
        "The initial value of the range must not be less than the final"
      );
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

  get range() {
    return [this.from, this.to];
  }

  validate(number) {
    if (isNaN(number) || typeof number !== "number") {
      throw new TypeError("Invalid type");
    }
    if (number >= this.from && number <= this.to) {
      return number;
    }
    throw new RangeError("the number is not in the specified range");
  }
}
const range1 = new RangeValidator(10, 15);
