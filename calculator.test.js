const calculator = require('./calculator');

test('Adds two numbers', () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test('Subtracts two numbers', () => {
  expect(calculator.subtract(5, 5)).toBe(0);
});

test('Multiplies two numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('Divides two numbers', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
