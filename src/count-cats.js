const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0;
  for (const key of matrix) {
    if (key.length > 0) {
      key.forEach(element => {
        if (element == '^^') result++;
      });
    };
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
