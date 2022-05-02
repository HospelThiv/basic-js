const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // let x = n.toString()
  // if (x.length > 1) {
  //   let number = 0;
  //   for (let index = 0; index < x.length; index++) {
  //     number += +x[index]
  //   }
  //   getSumOfDigits(number)
  // } else {
  //   return n;
  // }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let z = 0;
  function inSum(n) {
    let x = n.toString()
    if (x.length > 1) {
      let number = 0;
      for (let index = 0; index < x.length; index++) {
        number += +x[index]
      }
      inSum(number)
    } else {
      z = n;
    }
  }
  inSum(n);
  return z;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
