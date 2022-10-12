function capitalize(string) {
  letters = string.split('');
  firstLetter = letters[0];
  if (typeof firstLetter === 'string') {
    letters.splice(0, 1, firstLetter.toUpperCase());
  }
  return letters.join('');
}
module.exports = capitalize;
