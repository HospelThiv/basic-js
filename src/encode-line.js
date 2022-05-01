const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strCode = ``;
  let j = 0;
  for (let index = 0; index < str.length; index++) {
    if (index == 0) j++;
    if (index != 0 && index != str.length - 1) {
      if (str[index] == str[index - 1]) {
        j++;
      } else {
        if (j > 1) {
          strCode = `${strCode}${j}${str[index - 1]}`
        } else {
          strCode = `${strCode}${str[index - 1]}`
        }
        j = 1;
      }
    }
    if (index == str.length - 1) {
      if (str[index] == str[index - 1]) {
        j++;
        strCode = `${strCode}${j}${str[index - 1]}`
      } else {
        if (j > 1) {
          strCode = `${strCode}${j}${str[index - 1]}`
          strCode = `${strCode}${str[index]}`
        } else {
          strCode = `${strCode}${str[index - 1]}`
          strCode = `${strCode}${str[index]}`
        }
      }

    }
  }
  return strCode;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
