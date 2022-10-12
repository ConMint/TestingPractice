function analyzeArray(array) {
  return {
    average: array.reduce((a, b) => a + b, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

function calcAverage(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum / array.length;
}

function getMin(array) {
  let min = 'start';
  for (let num of array) {
    if (num <= min || min === 'start') {
      min = num;
    }
  }
  return min;
}

function getMax(array) {
  let max = 'start';
  for (let num of array) {
    if (num >= max || max === 'start') {
      max = num;
    }
  }
  return max;
}

function getLength(array) {
  return array.length;
}

module.exports = analyzeArray;
