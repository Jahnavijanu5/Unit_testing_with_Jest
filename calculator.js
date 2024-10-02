/*eslint-disable*/

/**
 * Check if both input arguments are numbers.
 * @param {*} a - The first input value.
 * @param {*} b - The second input value.
 * @throws Will throw an error if one of the input values is not a number.
 */
function typeCheck(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
}

/**
 * Check if the input argument is a number.
 * @param {*} a - The input value.
 * @throws Will throw an error if the input value is not a number.
 */
function typeCheckSingle(a) {
  if (typeof a !== "number") {
    throw new Error("Argument must be a number");
  }
}

/**
 * Add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  typeCheck(a, b);
  return a + b;
}

/**
 * Subtract two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of the two numbers.
 */
function subtract(a, b) {
  typeCheck(a, b);
  return a - b;
}

/**
 * Multiply two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(a, b) {
  typeCheck(a, b);
  return a * b;
}

/**
 * Divide two numbers.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of the two numbers.
 * @throws Will throw an error if division by zero is attempted.
 */
function divide(a, b) {
  typeCheck(a, b);
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

/**
 * Square a number.
 * @param {number} a - The number to square.
 * @returns {number} The square of the number.
 * @throws Will throw an error if the input value is not a number.
 */
function square(a) {
  typeCheckSingle(a);
  return a * a; // perform the square operation
}

/**
 * Find the square root of a number.
 * @param {number} a - The number to find the square root of.
 * @returns {number} The square root of the number.
 * @throws Will throw an error if the input value is not a number or if it is negative.
 */
function squareRoot(a) {
  typeCheckSingle(a); // type check using `typeCheckSingle`
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed"); // throw an error if negative
  }
  return Math.sqrt(a); // perform the square root operation
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square, // Exporting square
  squareRoot, // Exporting squareRoot
};
