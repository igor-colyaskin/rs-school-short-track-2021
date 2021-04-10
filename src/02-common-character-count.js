/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrOne = s1.split('');
  const arrTwo = s2.split('');
  arrOne = arrOne.map((e) => {
    if (arrTwo.indexOf(e) === -1) { return 0; }
    arrTwo[arrTwo.indexOf(e)] = '&';
    return 1;
  });
  return arrOne.reduce((a, b) => a + b, 0);
}

module.exports = getCommonCharacterCount;
