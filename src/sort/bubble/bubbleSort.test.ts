import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";

/*
-------------------------------------
[performance test result]
-------------------------------------

✓ should sort an empty array (2 ms)
✓ should sort an array with one element (1 ms)
✓ should sort an already sorted array
✓ should sort a reverse sorted array (1 ms)
✓ should sort an array with all elements the same (2 ms)
✓ should sort an array with duplicate elements
✓ should sort an array with positive and negative numbers
✓ should throw an error if the input is not an array (4 ms)
✓ should throw an error if the array contains non-number elements (1 ms)

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.819 s, estimated 1 s
-------------------------------------
*/

describe("bubbleSort", () => {
  test("should sort an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  test("should sort an array with one element", () => {
    expect(bubbleSort([5])).toEqual([5]);
  });

  test("should sort an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort a reverse sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort an array with all elements the same", () => {
    expect(bubbleSort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
  });

  test("should sort an array with duplicate elements", () => {
    expect(bubbleSort([3, 1, 2, 3, 2])).toEqual([1, 2, 2, 3, 3]);
  });

  test("should sort an array with positive and negative numbers", () => {
    expect(bubbleSort([3, -1, 2, -3, 0])).toEqual([-3, -1, 0, 2, 3]);
  });

  test("should throw an error if the input is not an array", () => {
    expect(() => bubbleSort(null as any)).toThrow(TypeError);
    expect(() => bubbleSort(123 as any)).toThrow(TypeError);
    expect(() => bubbleSort("string" as any)).toThrow(TypeError);
    expect(() => bubbleSort({} as any)).toThrow(TypeError);
  });

  test("should throw an error if the array contains non-number elements", () => {
    expect(() => bubbleSort([1, "two" as any, 3])).toThrow(TypeError);
    expect(() => bubbleSort([1, {} as any, 3])).toThrow(TypeError);
    expect(() => bubbleSort([1, undefined as any, 3])).toThrow(TypeError);
  });
});
