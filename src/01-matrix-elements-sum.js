/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  matrix.push(new Array(matrix[0].length).fill(0));
  const arrOne = new Array(matrix[0].length + 1).fill(0).map((e, ind) => matrix.reduce((a, b) => (`${a}${b[ind]} `), '').trim());
  const arrTwo = arrOne.map((e) => e.substring(e.indexOf('0') + 1, 0));
  const arrThree = arrTwo.map((e) => e.split(' ').reduce((a, b) => +a + +b, 0));
  return arrThree.reduce((a, b) => +a + +b, 0);
}

module.exports = getMatrixElementsSum;
