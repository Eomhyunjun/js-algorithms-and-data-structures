const stringSearch = require("./stringSearch");

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
});
