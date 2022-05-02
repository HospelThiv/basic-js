const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    throw new NotImplementedError('Not implemented');
    // if (typeof arr, toString()[0] != "[") return 0;
    let result = 0;
    arr.forEach(element => {
      if (typeof element == "object") {
        // console.log(element)
        const arrNum = calculateDepth1(element)
        if (arrNum > result) result = arrNum
      }
    });
    function calculateDepth1(params) {
      let result = 0;
      for (let i of params) {
        if (typeof i == "object") {
          if (typeof i == "object") {
            result++
            result += calculateDepth1(i);
          }
        }
      }
      return result;
    }
    if (result > 1) result += 2
    if (result == 1) result = 2
    if (result == 0) result = 1
    // console.log(arr, result)
    return result;
  }
}

module.exports = {
  DepthCalculator
};
