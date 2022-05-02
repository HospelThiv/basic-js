const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  console.log(email.lastIndexOf('@'))
  let result = ``
  for (let index = email.lastIndexOf('@') + 1; index < email.length; index++) {
    result = `${result}${email[index]}`

  }
  return result;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
