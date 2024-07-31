/**
 * Checks if the input array is valid for sorting.
 *
 * @param {any[]} arr - The input array to be validated.
 * @throws {TypeError} - If the input is not an array or contains non-number elements.
 */
export default function numberArr_validator(arr: any[]): void {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }
  if (arr.some((item) => typeof item !== "number")) {
    throw new TypeError("Array must contain only numbers.");
  }
}
