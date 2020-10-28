module.exports = function toReadable (number) {
  const numbers = new Map(),
        words = ['teen', 'ty', 'hundred'],
        digits = splitToDigit(number);
  let   string = '';
  
  numbers.set(0, '');
  numbers.set(1, 'one');
  numbers.set(2, 'two');
  numbers.set(3, 'three');
  numbers.set(4, 'four');
  numbers.set(5, 'five');
  numbers.set(6, 'six');
  numbers.set(7, 'seven');
  numbers.set(8, 'eight');
  numbers.set(9, 'nine');
  numbers.set(10, 'ten');
  numbers.set(11, 'eleven');
  numbers.set(12, 'twelve');
  numbers.set(13, 'thirteen');
  numbers.set(15, 'fifteen');
  numbers.set(18, 'eighteen');
  numbers.set(20, 'twenty');
  numbers.set(30, 'thirty');
  numbers.set(40, 'forty');
  numbers.set(50, 'fifty');
  numbers.set(80, 'eighty');
  
  if (number === 0) return 'zero';
  
  if (number > 99) {
    string += numbers.get(digits[0]) + ' ' + words[2];
    if (number % 100 === 0) return string;
    digits.shift();
  }
  if (digits.length === 2) {
    if (string.length != 0)
      string += ' ';
    if (digits[0] === 1) {
      string += numbers.get(digits[0] * 10 + digits[1]) === undefined ? numbers.get(digits[1]) + words[0] : numbers.get(digits[0] * 10 + digits[1]);
      return string;
    } else if (digits[0] > 5 && digits[0] != 8) {
      string += numbers.get(digits[0]) + words[1];
    } else {
      string += numbers.get(digits[0] * 10);
    }
    digits.shift();
  }
  if (digits.length === 1) {
    if (string.length != 0 && digits[0] != 0 && string.slice(-1) != ' ')
      string += ' ';
    string += numbers.get(digits[0]);
  }
  return string;
}

function splitToDigit(n){
  return (n + '').split('').map((i) => { return Number(i); })
}