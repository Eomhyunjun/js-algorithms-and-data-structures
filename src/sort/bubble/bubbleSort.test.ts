import { describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";
import { bubbleSort_desc } from "./bubbleSort_desc";
import { bubbleSort_opt } from "./bubbleSort_opt";

/*
-------------------------------------
[performance test result]
-------------------------------------
[Sorting Algorithms]
  bubbleSort
    ✓ should sort an empty array (2 ms)
    ✓ should sort an array with one element
    ✓ should sort an already sorted array
    ✓ should sort a reverse sorted array
    ✓ should sort an array with all elements the same
    ✓ should sort an array with duplicate elements (1 ms)
    ✓ should sort an array with positive and negative numbers
    ✓ should throw an error if the input is not an array (6 ms)
    ✓ should throw an error if the array contains non-number elements
  bubbleSort_desc
    ✓ should sort an empty array (1 ms)
    ✓ should sort an array with one element
    ✓ should sort an already sorted array
    ✓ should sort a reverse sorted array
    ✓ should sort an array with all elements the same
    ✓ should sort an array with duplicate elements
    ✓ should sort an array with positive and negative numbers
    ✓ should throw an error if the input is not an array (1 ms)
    ✓ should throw an error if the array contains non-number elements
  bubbleSort_opt
    ✓ should sort an empty array
    ✓ should sort an array with one element
    ✓ should sort an already sorted array
    ✓ should sort a reverse sorted array
    ✓ should sort an array with all elements the same
    ✓ should sort an array with duplicate elements
    ✓ should sort an array with positive and negative numbers
    ✓ should throw an error if the input is not an array (1 ms)
    ✓ should throw an error if the array contains non-number elements (1 ms)

[Sorting Algorithms Performance]
  ✓ bubbleSort should sort correctly (5 ms)
  ✓ bubbleSort performance (14 ms)
  ✓ bubbleSort_desc should sort correctly (4 ms)
  ✓ bubbleSort_desc performance (3 ms)
  ✓ bubbleSort_opt should sort correctly (4 ms)
  ✓ bubbleSort_opt performance (2 ms)
-------------------------------------
Test Suites: 1 passed, 1 total
Tests:       33 passed, 33 total
Snapshots:   0 total
Time:        0.845 s, estimated 1 s
-------------------------------------
*/

const sortingAlgorithms = {
  bubbleSort,
  bubbleSort_desc,
  bubbleSort_opt,
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

function generateRandomArray(size) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * size));
}

function measurePerformance(sortFunction, arr) {
  const start = process.hrtime.bigint();
  sortFunction(arr);
  const end = process.hrtime.bigint();
  return Number(end - start);
}

describe("Sorting Algorithms Performance", () => {
  const arraySize = 1000;
  const testArray = generateRandomArray(arraySize);

  Object.keys(sortingAlgorithms).forEach((algorithm) => {
    const sort = sortingAlgorithms[algorithm];

    test(`${algorithm} should sort correctly`, () => {
      const sortedArray = sort(testArray.slice());
      expect(sortedArray).toEqual(testArray.slice().sort((a, b) => a - b));
    });

    test(`${algorithm} performance`, () => {
      const time = measurePerformance(sort, testArray.slice());
      console.log(`${algorithm} Time: ${time} nanoseconds`);
    });
  });
});
