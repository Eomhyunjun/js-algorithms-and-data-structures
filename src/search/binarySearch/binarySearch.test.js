const binarySearch = require("./binarySearch");

/**
 * Tests for the binarySearch function.
 */
describe("binarySearch", () => {
  test("finds the target 2 in the array [1, 2, 3, 4, 5]", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
  });

  test("finds the target 3 in the array [1, 2, 3, 4, 5]", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("finds the target 5 in the array [1, 2, 3, 4, 5]", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("returns -1 when the target 6 is not in the array [1, 2, 3, 4, 5]", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("returns -1 when the target 100 is not in the array", () => {
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        100
      )
    ).toBe(-1);
  });

  test("finds the target 95 in the array", () => {
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        95
      )
    ).toBe(16);
  });

  test("finds the target 10 in the array", () => {
    expect(
      binarySearch(
        [
          5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96,
          98, 99,
        ],
        10
      )
    ).toBe(2);
  });
});
