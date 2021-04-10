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
  const arrZero = arr.filter((e) => e !== -1).sort((a, b) => a - b);
  const arrOne = arr.map((e) => {
    if (e === -1) return e;
    const x = arrZero[0];
    arrZero.shift();
    return x;
  });
  return arrOne;
}

module.exports = sortByHeight;
