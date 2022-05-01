const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let textNum = n.toString()
  let maxNumber = 0;
  let str;
  for (let index = 0; index < textNum.length; index++) {
    if (index == 0) {
      str = textNum.slice(1, textNum.length);
    }
    if (index == textNum.length - 1) {
      str = textNum.slice(0, textNum.length - 1);
    }
    if (index != 0 && index != textNum.length - 1) {
      str = textNum.slice(0, index) + textNum.slice(index + 1, textNum.length);
    }
    if (+str >= maxNumber) maxNumber = +str;

  }
  return maxNumber;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
