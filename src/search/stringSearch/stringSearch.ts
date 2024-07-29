/**
 * Find the number of times the short string appears in the long string
 * @param {string} long
 * @param {string} short
 * @returns {number} The number of times the short string appears in the long string
 */

function stringSearch(long: string, short: string): number {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

module.exports = stringSearch;
