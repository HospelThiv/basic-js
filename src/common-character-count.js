const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let arrayS1 = s1.split('');
  let arrayS2 = s2.split('');

  arrayS1.forEach(element => {
    let i = 0;
    arrayS2.forEach((element1, index) => {
      if (element == element1 && i == 0) {
        i++;
        result++;
        arrayS2[index] = undefined;
      }
    });
  });
  return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
