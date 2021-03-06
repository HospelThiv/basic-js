const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let array = []
  arr.forEach((element, index) => {
    if (element == -1) {
      array.push(-1)
    } else {
      array.push('text')
    }
  });
  arr.sort(function (a, b) {
    return a - b;
  })
  arr.forEach((element, index) => {
    if (element != -1) {
      array[array.indexOf('text')] = element
    }
  });

  return array;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
