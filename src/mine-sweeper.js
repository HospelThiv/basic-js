const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array = [];
  matrix.forEach((element, index) => {
    array.push([]);
  });
  matrix.forEach((element, index) => {
    element.forEach((element1, index1) => {
      if (element1) {
        array[index][index1] = 1
      } else {
        let i = 0;
        if (index == 0) {
          if (index1 == 0) {
            if (matrix[0][1] == true) { i++ };
            if (matrix[1][0] == true) { i++ };
            if (matrix[1][1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 != 0 && index1 != element.length - 1) {
            if (matrix[0][index1 - 1] == true) { i++ };
            if (matrix[0][index1 + 1] == true) { i++ };
            if (matrix[1][index1 - 1] == true) { i++ };
            if (matrix[1][index1] == true) { i++ };
            if (matrix[1][index1 + 1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 == element.length - 1) {
            if (matrix[0][1] == true) { i++ };
            if (matrix[1][0] == true) { i++ };
            if (matrix[1][1] == true) { i++ };
            array[index][index1] = i;
          }
        }
        if (index != 0 && index != matrix.length - 1) {
          if (index1 == 0) {
            if (matrix[index][index1 + 1] == true) { i++ };
            if (matrix[index - 1][index1] == true) { i++ };
            if (matrix[index + 1][index1] == true) { i++ };
            if (matrix[index - 1][index1 + 1] == true) { i++ };
            if (matrix[index + 1][index1 + 1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 != 0 && index1 != element.length - 1) {
            if (matrix[index][index1 + 1] == true) { i++ };
            if (matrix[index - 1][index1] == true) { i++ };
            if (matrix[index + 1][index1] == true) { i++ };
            if (matrix[index - 1][index1 + 1] == true) { i++ };
            if (matrix[index + 1][index1 + 1] == true) { i++ };
            if (matrix[index][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1 - 1] == true) { i++ };
            if (matrix[index + 1][index1 - 1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 == element.length - 1) {
            if (matrix[index - 1][index1] == true) { i++ };
            if (matrix[index + 1][index1] == true) { i++ };
            if (matrix[index][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1 - 1] == true) { i++ };
            if (matrix[index + 1][index1 - 1] == true) { i++ };
            array[index][index1] = i;
          }
        }
        if (index == matrix.length - 1) {
          if (index1 == 0) {
            if (matrix[index - 1][0] == true) { i++ };
            if (matrix[index][index1 + 1] == true) { i++ };
            if (matrix[index - 1][1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 != 0 && index1 != element.length - 1) {
            if (matrix[index][index1 + 1] == true) { i++ };
            if (matrix[index][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1] == true) { i++ };
            if (matrix[index - 1][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1 + 1] == true) { i++ };
            array[index][index1] = i;
          }
          if (index1 == element.length - 1) {
            if (matrix[index][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1 - 1] == true) { i++ };
            if (matrix[index - 1][index1] == true) { i++ };
            array[index][index1] = i;
          }
        }
      }
    });
  });
  return array;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  minesweeper
};
