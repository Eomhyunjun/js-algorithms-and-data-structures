import { describe, expect, test } from "@jest/globals";
import { radixSort } from "./radixSort";

const sortingAlgorithms = {
  radixSort,
};

describe("Sorting Algorithms", () => {
  Object.keys(sortingAlgorithms).forEach((algorithm) => {
    const sort = sortingAlgorithms[algorithm];

    describe(`${algorithm}`, () => {
      test("should sort an empty array", () => {
        expect(sort([])).toEqual([]);
      });

      test("should sort an array with one element", () => {
        expect(sort([5])).toEqual([5]);
      });

      test("should sort an already sorted array", () => {
        expect(sort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
      });

      test("should sort a reverse sorted array", () => {
        expect(sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
      });

      test("should sort an array with all elements the same", () => {
        expect(sort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
      });

      test("should sort an array with duplicate elements", () => {
        expect(sort([3, 1, 2, 3, 2])).toEqual([1, 2, 2, 3, 3]);
      });

      // test("should sort an array with positive and negative numbers", () => {
      //   expect(sort([3, -1, 2, -3, 0])).toEqual([-3, -1, 0, 2, 3]);
      // });

      test("should sort an array with normal different digit lengths", () => {
        expect(sort([3, 45, 678, 1, 2345, 67890, 12, 4567, 89, 123])).toEqual([
          1, 3, 12, 45, 89, 123, 678, 2345, 4567, 67890,
        ]);
      });

      test("should throw an error if the input is not an array", () => {
        expect(() => sort(null)).toThrow(TypeError);
        expect(() => sort(123)).toThrow(TypeError);
        expect(() => sort("string")).toThrow(TypeError);
        expect(() => sort({})).toThrow(TypeError);
      });

      test("should throw an error if the array contains non-number elements", () => {
        expect(() => sort([1, "two", 3])).toThrow(TypeError);
        expect(() => sort([1, {}, 3])).toThrow(TypeError);
        expect(() => sort([1, undefined, 3])).toThrow(TypeError);
      });
    });
  });
});
