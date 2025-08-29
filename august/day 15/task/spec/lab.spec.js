const { createArray, random } = require("../lab.js");

describe("Test createArray function", function () {
  //1: test that the return value of type array
  it("Tests that the return value, should be array", () => {
    expect(createArray(3)).toEqual(jasmine.any(Array));
  });

  //2: test if we pass 2 it will return array of length 2 and test it includes 1
  it("Tests if we pass 2, should return array of length 2", () => {
    expect(createArray(2)).toHaveSize(2);
  });
  it("Tests if we pass 2, should include 1", () => {
    expect(createArray(2)).toContain(1);
  });

  //3:test if we pass 3 it will return array of length 3 and test it doesn't include 3
  it("Tests if we pass 3, should return array of length 3", () => {
    expect(createArray(3)).toHaveSize(3);
  });
  it("Tests if we pass 3, should not include 3", () => {
    expect(createArray(3)).not.toContain(3);
  });

  //4: tests if we pass 0 it will return empty array
  it("Tests if we pass 0, should return empty array", () => {
    expect(createArray(0)).toEqual([]);
  });

  //5: tests if it returns array starting with 0
  it("Tests if we pass a number, should return an array starting with 0", () => {
    expect(createArray(5)[0]).toBe(0);
  });
});

describe("Test random function", function () {
  //1: test that the return value is a number
  it("Tests that the return value, should be number", () => {
    expect(random(2, 9)).toEqual(jasmine.any(Number));
  });

  //2: test if we pass 5,7 it will return a number >= 5 and <= 7
  it("Tests if we pass 5,7 should return a number >= 5", () => {
    expect(random(5, 7)).toBeGreaterThanOrEqual(5);
  });
  it("Tests if we pass 5,7 should return a number  <= 7", () => {
    expect(random(5, 7)).toBeLessThanOrEqual(7);
  });

  //3: test if we pass one parameter it will return NaN
  it("Test if we pass one parameter, should return NaN", () => {
    expect(random(5)).toBeNaN();
  });

  //4: test if we pass the same parameter for min and max it will return that number
  it("Tests if we pass 3 for both min and max, should return 3", () => {
    expect(random(3, 3)).toBe(3);
  });

  //5: tests if we pass -5 ,-1 it will return a number >= -5 and <= -1
  it("Tests if we pass -5,-1 should return number >= -5", () => {
    expect(random(-5, -1)).toBeGreaterThanOrEqual(-5);
  });
  it("Tests if we pass -5,-1 should return number <= -1", () => {
    expect(random(-5, -1)).toBeLessThanOrEqual(-1);
  });
});
