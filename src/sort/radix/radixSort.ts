import { getDigit } from "../../utils/getDigit/getDigit";
import numberArr_validator from "../../utils/validator/numberArr_validator";

/**
 * @description Radix Sort
 * dosn't work with negative numbers
 */

export function radixSort(numbers: number[]) {
  numberArr_validator(numbers);
  let res = numbers.slice();

  const base: number = 10;
  const maxDigitCount: number = mostDigits(numbers);

  for (let digits = 0; digits < maxDigitCount; digits++) {
    const tmp: number[][] = Array.from({ length: base }, () => []);

    for (let i = 0; i < res.length; i++) {
      const digit = getDigit(res[i], digits);
      tmp[digit].push(res[i]);
    }

    res = [].concat(...tmp);
  }
  return res;
}

function mostDigits(numbers: number[]) {
  let maxDigits = 0;
  for (const number of numbers) {
    maxDigits = Math.max(maxDigits, digitCount(number));
  }
  return maxDigits;
}

function digitCount(number: number) {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

// // simple test cases for mostDigits and digitCount
// console.log(mostDigits([])); // 0
// console.log(mostDigits([2, 1, 0])); // 1
// console.log(mostDigits([123, 45, 6789])); // 4
// console.log(mostDigits([123, 45, 6789, 0])); // 4
// console.log(mostDigits([123, 45, 23123136789, 0])); //11

// // simple test cases for digitCount
// console.log(digitCount(12345)); // 5
// console.log(digitCount(-12345)); // 5
// console.log(digitCount(0)); // 1
