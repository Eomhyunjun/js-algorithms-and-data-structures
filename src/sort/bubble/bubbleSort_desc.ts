import swap from "../../utils/swap/swap";
import numberArr_validator from "../../utils/validator/numberArr_validator";

/**
 * Sorts an array of numbers using an alternative bubble sort algorithm.
 *
 * This version iterates from the end of the array towards the beginning,
 * reducing the number of elements to be compared in each subsequent iteration.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
export function bubbleSort_desc(arr: number[]): number[] {
  numberArr_validator(arr);

  const res = arr.slice();
  const len = res.length;

  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (res[j] > res[j + 1]) {
        swap(res, j, j + 1);
      }
    }
  }

  return res;
}
