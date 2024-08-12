import swap from "../../utils/swap/swap";
import numberArr_validator from "../../utils/validator/numberArr_validator";

export function quickSort(arr: number[]): number[] {
  numberArr_validator(arr);

  const copyArr = arr.slice();
  quickSortCore(copyArr);

  return copyArr;
}

function quickSortCore(
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
) {
  if (start < end) {
    const pivot_idx = pivot(arr, start, end);
    quickSortCore(arr, start, pivot_idx - 1);
    quickSortCore(arr, pivot_idx + 1, end);
  }
  return;
}

/**
 * Find the pivot index of the array
 * And sort the array so that all elements less than the pivot are on the left
 */
function pivot(arr: number[], start: number, end: number): number {
  const pivot = arr[start];
  let swap_idx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swap_idx++;
      swap(arr, i, swap_idx);
    }
  }
  swap(arr, start, swap_idx);

  return swap_idx;
}

// let arr = [4, 8, 2, 1, 5, 7, 6, 3];
// pivot(arr); // [3, 2, 1, 4, 5, 7, 6, 8]
// console.log(arr);
