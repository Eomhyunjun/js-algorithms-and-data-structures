import { describe, expect, test } from "@jest/globals";
import stringSearch from "./stringSearch";

/**
 * Tests for the stringSearch function.
 */

describe("stringSearch", () => {
  test('finds the target "world" in the string "hello world"', () => {
    expect(stringSearch("hello world", "world")).toBe(1);
  });

  test('finds the target "ab" in the string "abb a ba b ab"', () => {
    expect(stringSearch("abb a ba b ab", "ab")).toBe(2);
  });

  test('finds the target number 3 in the string "abb a ba b ab"', () => {
    expect(stringSearch("abb a ba b ab", "3")).toBe(0);
  });
});
