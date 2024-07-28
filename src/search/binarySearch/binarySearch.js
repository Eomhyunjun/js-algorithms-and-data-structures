/**
 * Finds the index of the target in the array.
 * @param {number[]} arr - The array of numbers.
 * @param {number} target - The target number to find.
 * @returns {number[] | number} The index of the target in the array, or -1 if not found.
 */

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

module.exports = binarySearch;
