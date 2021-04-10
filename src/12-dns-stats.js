/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  domains.map((e) => {
    let arr = e.split('.');
    arr = arr.reverse().map((el) => `.${el}`);
    for (let i = 0; i < arr.length; i++) {
      if (i) arr[i] = `${arr[i - 1]}${arr[i]}`;
      if (arr[i] in obj) {
        obj[arr[i]]++;
      } else {
        obj[arr[i]] = 1;
      } // end if else
    } // end for
    return e;
  });
  return obj;
}

module.exports = getDNSStats;
