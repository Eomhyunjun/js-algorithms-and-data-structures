import swap from "../../utils/swap/swap";
import numberArr_validator from "../../utils/validator/numberArr_validator";

/**
 * Sorts an array of numbers using an optimized bubble sort algorithm.
 *
 * This version includes an optimization that stops the algorithm early if no swaps
 * were made during a pass, indicating that the array is already sorted.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
export function bubbleSort_opt(arr: number[]): number[] {
  numberArr_validator(arr);

  const res = arr.slice(); // Create a copy to avoid mutating the original array
  const len = res.length;
  let swapped = false;

  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (res[j] > res[j + 1]) {
        swap(res, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return res;
}
