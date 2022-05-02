const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let result = true;
  let arrayOfStrings = n.split('-');
  // debugger
  if (arrayOfStrings.length != 6) {
    result = false;
  } else {
    arrayOfStrings.forEach(element => {
      if (result == true) {
        if (isNaN(parseInt(element, 16))) {
          result = false;
        }
        if (parseInt(element, 16) < 0 && parseInt(element, 16) > 255) {
          result = false;
        }
      }

    });
  }
  // console.log(arrayOfStrings)
  return result;
  // разделить через | и посчитать каждое число сравнив с 0-255
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
module.exports = {
  isMAC48Address
};
