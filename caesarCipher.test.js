const caesarCipher = require('./caesarCipher');

test('Check basic case', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('Check punctuation', () => {
  expect(caesarCipher('oh my god!', 3)).toBe('rk pb jrg!');
});

test('Check z wraps', () => {
  expect(caesarCipher('zomg', 1)).toBe('apnh');
});
