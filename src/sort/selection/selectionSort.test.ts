import { describe, expect, test } from "@jest/globals";
import { selectionSort } from "./selectionSort";

const sortingAlgorithms = {
  selectionSort,
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

      test("should sort an array with positive and negative numbers", () => {
        expect(sort([3, -1, 2, -3, 0])).toEqual([-3, -1, 0, 2, 3]);
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
