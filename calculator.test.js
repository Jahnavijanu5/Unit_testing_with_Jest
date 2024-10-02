/*eslint-disable*/

/* const {
    add,
    subtract,
    multiply,
    divide,
    // squareRoot,
    // square,
  } = require('./calculator');
  
  describe('Calculator', () => {
    describe('add()', () => {
      // ... input the `add` the tests here
    });
  }); */

/*eslint-disable*/

/*eslint-disable*/

/*eslint-disable*/

/*eslint-disable*/

/*eslint-disable*/

const {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
} = require("./calculator");

describe("Calculator", () => {
  describe("add()", () => {
    it("should add two numbers", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 2)).toBe(1);
    });

    it("should throw an error if arguments are not numbers", () => {
      expect(() => add("1", 2)).toThrow("Both arguments must be numbers");
      expect(() => add(1, "2")).toThrow("Both arguments must be numbers");
    });
  });

  describe("subtract()", () => {
    it("should subtract two numbers", () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(-5, 3)).toBe(-8);
    });

    it("should throw an error if arguments are not numbers", () => {
      expect(() => subtract("5", 3)).toThrow("Both arguments must be numbers");
      expect(() => subtract(5, "3")).toThrow("Both arguments must be numbers");
    });
  });

  describe("divide()", () => {
    it("should divide two numbers", () => {
      expect(divide(6, 3)).toBe(2);
      expect(divide(-6, 3)).toBe(-2);
    });

    it("should throw an error if arguments are not numbers", () => {
      expect(() => divide("6", 3)).toThrow("Both arguments must be numbers");
      expect(() => divide(6, "3")).toThrow("Both arguments must be numbers");
    });

    it("should throw an error if the second argument is 0", () => {
      expect(() => divide(6, 0)).toThrow("Division by zero is not allowed");
    });
  });

  describe("multiply()", () => {
    it("should multiply two numbers", () => {
      expect(multiply(6, 3)).toBe(18);
      expect(multiply(-6, 3)).toBe(-18);
    });

    it("should throw an error if arguments are not numbers", () => {
      expect(() => multiply("6", 3)).toThrow("Both arguments must be numbers");
      expect(() => multiply(6, "3")).toThrow("Both arguments must be numbers");
    });
  });
  1;
  describe("square()", () => {
    it("should square a number", () => {
      expect(square(2)).toBe(4);
      expect(square(-2)).toBe(4);
    });

    it("should throw an error if the argument is not a number", () => {
      expect(() => square("2")).toThrow("Argument must be a number");
    });
  });

  describe("squareRoot()", () => {
    it("should find the square root of a number", () => {
      expect(squareRoot(4)).toBe(2);
      expect(squareRoot(9)).toBe(3);
    });

    it("should throw an error if the argument is not a number", () => {
      expect(() => squareRoot("4")).toThrow("Argument must be a number");
    });

    it("should throw an error if the argument is negative", () => {
      expect(() => squareRoot(-4)).toThrow(
        "Square root of a negative number is not allowed"
      );
    });
  });
});
