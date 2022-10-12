const reverseString = require('./reverseString');

test('Reverse one word', () => {
  expect(reverseString('Hello')).toBe('olleH');
});

test('Reverse multiple words with spaces', () => {
  expect(reverseString('Hello there Connor')).toBe('ronnoC ereht olleH');
});

test('Works with punctuation', () => {
  expect(reverseString('Hello there, my friend!')).toBe(
    '!dneirf ym ,ereht olleH'
  );
});

test('Reverse numbers', () => {
  expect(reverseString(1234)).toBe('4321');
});
