import { describe, expect, test } from "@jest/globals";
import swap from "./swap";
import swap_destruct from "./swap_destruct";
import swap_xor from "./swap_xor";

describe("three different ways to swap", () => {
  test("swap with temp", () => {
    const arr = [1, 2, 3, 4, 5];
    swap(arr, 0, 4);
    expect(arr).toEqual([5, 2, 3, 4, 1]);
  });

  test("swap with Destructuring assignment", () => {
    const arr = [1, 2, 3, 4, 5];
    swap_destruct(arr, 0, 4);
    expect(arr).toEqual([5, 2, 3, 4, 1]);
  });

  test("swap with xor", () => {
    const arr = [1, 2, 3, 4, 5];
    swap_xor(arr, 0, 4);
    expect(arr).toEqual([5, 2, 3, 4, 1]);
  });

  test("performance comparison", () => {
    const iterations = 1_000_000_000; // 1 billion
    let arr: number[];

    console.time("swap with temp");
    for (let i = 0; i < iterations; i++) {
      arr = [1, 2, 3, 4, 5];
      swap(arr, 0, 4);
    }
    console.timeEnd("swap with temp");

    console.time("swap with Destructuring assignment");
    for (let i = 0; i < iterations; i++) {
      arr = [1, 2, 3, 4, 5];
      swap_destruct(arr, 0, 4);
    }
    console.timeEnd("swap with Destructuring assignment");

    console.time("swap with xor");
    for (let i = 0; i < iterations; i++) {
      arr = [1, 2, 3, 4, 5];
      swap_xor(arr, 0, 4);
    }
    console.timeEnd("swap with xor");
  });
});

/**
 * -------------------------------------
 * [performance test result]
 * -------------------------------------
 * xor > Destructuring assignment > temp
 * -------------------------------------
 * swap with temp: 11925 ms
 * swap with Destructuring assignment: 11280 ms
 * swap with xor: 11094 ms
 * -------------------------------------
 */
