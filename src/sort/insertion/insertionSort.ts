import numberArr_validator from "../../utils/validator/numberArr_validator";

export default function insertionSort(arr: number[]): number[] {
  numberArr_validator(arr);

  let res = arr.slice();
  const len = res.length;

  for (let i = 1; i < len; i++) {
    let currentVal = res[i];
    for (var j = i - 1; j >= 0 && res[j] > currentVal; j--) {
      res[j + 1] = res[j];
    }
    res[j + 1] = currentVal;
  }
  return res;
}
