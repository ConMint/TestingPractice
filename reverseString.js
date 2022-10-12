function reverseString(string) {
  letters = string.toString().split('');
  reverseLetters = [];
  for (let i = 0; i < letters.length; i++) {
    reverseLetters.unshift(letters[i]);
  }
  return reverseLetters.join('');
}

module.exports = reverseString;
