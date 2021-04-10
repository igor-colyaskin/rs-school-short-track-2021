/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrZero = String(n).split('');
  const arrOne = arrZero.map((e, ind) => arrZero.filter((eOne, indOne) => ind !== indOne).reduce((a, b) => a + b, ''));
  const arrTwo = arrOne.sort((a, b) => b - a);
  return +arrTwo[0];
}

module.exports = deleteDigit;
