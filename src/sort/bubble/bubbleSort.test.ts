import { beforeAll, describe, expect, test } from "@jest/globals";
import bubbleSort from "./bubbleSort";
import { bubbleSort_desc } from "./bubbleSort_desc";
import { bubbleSort_opt } from "./bubbleSort_opt";

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

describe("Sorting Algorithms Performance", () => {
  const arraySize = 100;
  const testRuns = 100;
  const times = [];
  const algorithms = Object.keys(sortingAlgorithms);

  function generateRandomArray(size) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * size));
  }

  function measureAveragePerformance(sortFn, testRuns, arraySize) {
    let totalTime = 0;
    for (let i = 0; i < testRuns; i++) {
      const testArray = generateRandomArray(arraySize);
      const start = process.hrtime.bigint();
      sortFn(testArray);
      const end = process.hrtime.bigint();
      totalTime += Number(end - start);
    }
    return totalTime / testRuns;
  }

  beforeAll(() => {
    algorithms.forEach((algorithm) => {
      const sort = sortingAlgorithms[algorithm];
      // Perform correctness test for each algorithm
      for (let i = 0; i < testRuns; i++) {
        const testArray = generateRandomArray(arraySize);
        const sortedArray = sort(testArray.slice());
        expect(sortedArray).toEqual(testArray.slice().sort((a, b) => a - b));
      }

      // Measure performance for each algorithm
      const averageTime = measureAveragePerformance(sort, testRuns, arraySize);
      times.push({ algorithm, averageTime });
    });
  });

  test("Rank sorting algorithm performance", () => {
    times.sort((a, b) => a.averageTime - b.averageTime);
    console.log("Algorithm performance ranking:");
    times.forEach((entry, index) => {
      console.log(
        `${index + 1}. ${entry.algorithm}: ${entry.averageTime} nanoseconds`
      );
    });
  });
});
