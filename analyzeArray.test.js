const analyzeArray = require('./analyzeArray');

test('ARRAY ANALYSIS TEST 1', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('ARRAY ANALYSIS TEST 2', () => {
  expect(analyzeArray([1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 4,
  });
});

test('ARRAY ANALYSIS TEST 3', () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
