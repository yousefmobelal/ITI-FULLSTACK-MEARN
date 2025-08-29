const { sum, stringReverse, removeDuplicate } = require("../index.js");

//suite
describe("test sum function", function () {
  it("Tests if the parameters are numbers, should return summation correctly", () => {
    expect(sum(5, 6)).toBe(11);
  });

  it("Tests if the parameters are numbers, should return summation greater than 10", () => {
    expect(sum(5, 6)).toBeGreaterThan(10);
  });

  it("Test if the params are negative numbers, should return negative number", () => {
    expect(sum(-3, -2)).toBeLessThan(0);
  });

  it("Test if params are string, should throw an error", () => {
    expect(() => sum("al", "afkdn")).toThrow();
  });
});

//suite
describe("test stringReverse function", function () {
  it("Tests if the input is string, should return the reverse of the input", () => {
    expect(stringReverse("Yousef")).toBe("fesuoY");
  });

  it("Tests if the function return string", () => {
    expect(typeof stringReverse("Ahmed")).toBe("string"); //.toEqual(jasmine.any(String))
  });

  it("Tests if the input is not string, should throw an error", () => {
    expect(() => stringReverse(15321)).toThrow();
  });
});

//suite
describe("test removeDuplicate function", function () {
  it("Tests that the function remove any duplicates", () => {
    expect(removeDuplicate([1, 2, 2, 3, 3, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });

  it("Tests that the function return list", () => {
    expect(removeDuplicate([1, 2, 2, 2, 3])).toEqual(jasmine.any(Array));
  });
});
