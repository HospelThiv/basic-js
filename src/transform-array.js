const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let array = []

  for (let index = 0; index < arr.length; index++) {
    let j = 0;
    if (arr[index] == '--discard-next') {
      index++;
      array.push('')
      j++
    }
    if (arr[index] == '--discard-prev') {
      array[array.length - 1] = ''
      j++
    }
    if (arr[index] == '--double-next') {
      j++
      array.push(arr[index + 1])
    }
    if (arr[index] == '--double-prev') {
      j++
      array.push(arr[index - 1])
    }

    if (j == 0) {
      array.push(arr[index])
    }
  }

  let arr1 = []
  array.forEach(element => {
    if (element != '') arr1.push(element)
  });
  // console.log(arr1)
  return arr1;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
