import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";

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
