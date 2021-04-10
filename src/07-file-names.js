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
  const arr = names.map((e) => e);
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++;
      arr[i] = `${arr[i]}(${obj[arr[i]]})`;
      obj[arr[i]] = 0;
    } else {
      obj[arr[i]] = 0;
    } // end if else
  } // end for
  return arr;
}

module.exports = renameFiles;
