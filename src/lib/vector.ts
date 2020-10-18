/**
 * Represents a math vector with x, y position, direction and magnitude.
 */
export class Vector {
  /**
   * The x position of the vector.
   */
  x: number;

  /**
   * The y position of the vector.
   */
  y: number;

  /**
   * The angle of the vector to the vector.
   */
  angle: number;

  /**
   * The distance between the vector's current position to unity.
   */
  length: number;

  constructor(x?: number, y?: number) {
    this._compute(x, y);
  }

  _compute(x: number, y: number): void {
    this.x = x;
    this.y = y;
    this.angle = Math.atan2(y, x);
    this.length = Math.sqrt(x * x + y * y);
  }

  /**
   * Sets the angle of the vector with respect to the unit vector.
   * @param angle The angle to unity.
   */
  setAngle(angle: number): void {
    this.angle = angle;
    this.x = Math.cos(this.angle) * this.length;
    this.y = Math.sin(this.angle) * this.length;
  }

  /**
   * Sets the distance to unit vector.
   * @param length The length to the unit vector.
   */
  setLength(length: number): void {
    this.length = length;
    this.x = Math.cos(this.angle) * this.length;
    this.y = Math.sin(this.angle) * this.length;
  }

  /**
   * Add the given vector to the current vector.
   * @param v The vector to add.
   */
  add(v: Vector): void {
    this._compute(this.x + v.x, this.y + v.y);
  }

  /**
   * Subtracts the given vector to the current vector.
   * @param v The vector to subtract.
   */
  subtract(v: Vector): void {
    this._compute(this.x - v.x, this.y - v.y);
  }

  /**
   * Multiplies the current vector by a scalar.
   * @param scalar The scalar to multiply.
   */
  multiply(scalar: number): void {
    this._compute(this.x * scalar, this.y * scalar);
  }

  /**
   * Divides the current vector by a scalar.
   * @param scalar The scalar to divide.
   */
  divide(scalar: number): void {
    this._compute(this.x / scalar, this.y / scalar);
  }

  /**
   * Adds two vectors together.
   * @param v1 Vector operand one for addition.
   * @param v2  Vector operand two for addition.
   */
  static add(v1: Vector, v2: Vector): Vector {
    const x = v1.x + v2.x;
    const y = v1.y + v2.y;
    return new Vector(x, y);
  }

  /**
   * Subtract two vectors.
   * @param v1 Vector operand one for subtraction.
   * @param v2  Vector operand two for subtraction.
   */
  static subtract(v1: Vector, v2: Vector): Vector {
    const x = v1.x - v2.x;
    const y = v1.y - v2.y;
    return new Vector(x, y);
  }

  /**
   * Multiplies a vector and a scalar.
   * @param v1 Vector operand for multiplication.
   * @param v2 Scalar operand for multiplication.
   */
  static multiply(v: Vector, k: number): Vector {
    return new Vector(v.x * k, v.y * k);
  }
}
