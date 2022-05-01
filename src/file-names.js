const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let array = [];
  let array1 = [];
  names.forEach(element => {
    let ind = array.indexOf(element);
    if (ind >= 0) {
      let x = array[ind + 1]
      array[ind + 1] = `${x}${+x[x.length - 1] + 1}`
    } else {
      array.push(element, '0')
    }
  });
  names.forEach((element, index) => {
    let ind = array.indexOf(element);
    if (array[ind + 1][0] != '0') {
      let namesIndx = names.indexOf(`${element}(${array[ind + 1][0]})`)
      if (namesIndx >= 0) {
        array1.push(namesIndx)
      }
      names[index] = `${element}(${array[ind + 1][0]})`
      array[ind + 1] = array[ind + 1].slice(1, array[ind + 1].length)
    } else {
      array[ind + 1] = array[ind + 1].slice(1, array[ind + 1].length)
    }
  });
  if (array1.length) {
    array1.forEach(element => {
      names[element] = `${names[element]}(1)`
    });
  }
  return names;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
