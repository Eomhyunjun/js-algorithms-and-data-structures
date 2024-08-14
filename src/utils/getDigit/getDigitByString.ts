/**
 * string ver
 */
function getDigitByString(number: number, place: number) {
  const stringNumber = number.toString();

  if (place < 0) return null;
  if (place >= stringNumber.length) return null;

  return Number(stringNumber[stringNumber.length - 1 - place]);
}

// // simple test for getDigitByString
// console.log("=== getDigitByString ===");
// console.log(getDigitByString(12345, 0)); // 5
// console.log(getDigitByString(-12345, 1)); // 4
// console.log(getDigitByString(12345, 2)); // 3
// console.log(getDigitByString(12345, 4)); // 1
