/**
 * normal ver
 * @description return null if the place is out of range
 * @param {number} number
 * @param {number} place
 * @returns {number | null}
 */
export function getDigit(number: number, place: number): number | null {
  if (place < 0) return null;
  if (place >= number.toString().length) return null;

  return Math.floor(Math.abs(number) / Math.pow(10, place)) % 10;
}

// // simple test for getDigit
// console.log("=== getDigit ===");
// console.log(getDigit(12345, 0)); // 5  %10
// console.log(getDigit(-12345, 1)); // 4  %100 / 10
// console.log(getDigit(12345, 2)); // 3
// console.log(getDigit(12345, 4)); // 1
