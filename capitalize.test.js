const capitalize = require('./capitalize');

test('Capitalizes the first letter of a string', () => {
  expect(capitalize('boaby')).toBe('Boaby');
});

test('Works with single letter', () => {
  expect(capitalize('A')).toBe('A');
});

test('Ignore numbers', () => {
  expect(capitalize('5john')).toBe('5john');
});
