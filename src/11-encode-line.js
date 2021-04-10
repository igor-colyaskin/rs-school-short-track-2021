/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';

  let arr = [str[0]];
  let counter = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      counter++;
      arr[counter] = str[i];
    } else {
      arr[counter] = `${arr[counter]}${str[i]}`;
    } // end if else
  } // end for
  arr = arr.map((e) => (e.length === 1 ? e : `${e.length}${e[0]}`));
  return arr.join('');
}

module.exports = encodeLine;
