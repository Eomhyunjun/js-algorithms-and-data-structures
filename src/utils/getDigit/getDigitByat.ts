/**
 * ES2022 ver (at method)
 */
function getDigitByat(number: number, place: number) {
  const stringNumber = number.toString();

  if (place < 0) return null;
  if (place >= stringNumber.length) return null;

  return Number(stringNumber.at(-1 - place));
}

// // simple test for getDigitByat
// console.log("=== getDigitByat ===");
// console.log(getDigitByat(12345, 0)); // 5
// console.log(getDigitByat(-12345, 1)); // 4
// console.log(getDigitByat(12345, 2)); // 3
// console.log(getDigitByat(12345, 4)); // 1
