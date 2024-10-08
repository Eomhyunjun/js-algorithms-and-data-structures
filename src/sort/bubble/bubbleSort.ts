import swap from "../../utils/swap/swap";
import numberArr_validator from "../../utils/validator/numberArr_validator";

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
export default function bubbleSort(arr: number[]): number[] {
  numberArr_validator(arr);

  const res = arr.slice(); // Create a copy to avoid mutating the original array
  const len = res.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        swap(res, j, j + 1);
      }
    }
  }

  return res;
}
