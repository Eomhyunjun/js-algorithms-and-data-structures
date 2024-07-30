import swap from "../../utils/swap/swap";

/**
 * Checks if the input array is valid for sorting.
 *
 * @param {any[]} arr - The input array to be validated.
 * @throws {TypeError} - If the input is not an array or contains non-number elements.
 */
function validateArray(arr: any[]): void {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  if (arr.some((el) => typeof el !== "number")) {
    throw new TypeError("Array must contain only numbers.");
  }
}

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 *
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */
export default function bubbleSort(arr: number[]): number[] {
  validateArray(arr);

  const res = arr.slice(); // Create a copy to avoid mutating the original array
  const len = res.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (res[j] > res[j + 1]) {
        swap(res, j, j + 1);
      }
    }
  }

  return res;
}
