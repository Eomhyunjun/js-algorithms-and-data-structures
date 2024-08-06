import swap from "../../utils/swap/swap";
import numberArr_validator from "../../utils/validator/numberArr_validator";

/**
 * @param {number[]} arr - The array of numbers to be sorted.
 * @returns {number[]} - The sorted array.
 */

export function selectionSort(arr: number[]): number[] {
  numberArr_validator(arr);

  const res = arr.slice();
  const len = res.length;

  for (let i = 0; i < len - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < len; j++) {
      if (res[j] < res[minIdx]) minIdx = j;
    }

    if (minIdx !== i) swap(res, i, minIdx);
  }

  return res;
}
