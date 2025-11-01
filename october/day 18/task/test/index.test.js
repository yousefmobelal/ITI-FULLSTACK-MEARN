// import * as chai from "chai";
// const { assert, expect } = chai;
// chai.should();

// import {
//   capitalizeText,
//   createArray,
//   obj1,
//   obj2,
//   checkPositivity,
//   Mult,
//   obj3,
// } from "../index.js";

describe("Test capitalizeText", function () {
  it("should return string when input is a string", function () {
    const result = capitalizeText("yousef");
    expect(result).to.be.a("string");
  });

  it("should return capitalized string when input is a string", function () {
    const result = capitalizeText("hamada");
    expect(result).to.equal("HAMADA");
  });

  it("should throw TypeError when input is not a string", () => {
    expect(() => capitalizeText(2)).to.throw(TypeError);
  });

  it("should accept only one parameter", () => {
    expect(() => capitalizeText("hello", "from", "here")).to.throw(Error);
  });
});

describe("Test createArray", () => {
  it("should has return type of Array", () => {
    createArray(3).should.be.an("array");
  });
  it("should include 1 when input is 3", () => {
    assert.include(createArray(3), 1);
  });
  it("should return array of 3 numbers starting from 0 to 2 when input is 3", () => {
    expect(createArray(3)).has.lengthOf(3).to.deep.equal([0, 1, 2]);
  });
  it("should throw an error when input is not a number", () => {
    expect(() => createArray([1, 2])).to.throw();
  });
});

describe("Test Objects Equality", () => {
  it("check if obj1 equals obj2", () => {
    expect(obj1).to.deep.equal(obj2);
    assert.deepEqual(obj1, obj2);
    obj1.should.deep.equal(obj2);
  });
});

describe("Test checkPositivity", () => {
  it("should return true when (input > 0)", () => {
    expect(checkPositivity(4)).to.equal(true);
    checkPositivity(4).should.equal(true);
    assert.equal(checkPositivity(4), true);
  });

  it("should return false when (input < 0)", () => {
    expect(checkPositivity(0)).to.equal(false);
    checkPositivity(0).should.equal(false);
    assert.equal(checkPositivity(0), false);
  });

  it("should throw an error when there is more than one input", () => {
    expect(() => checkPositivity(1, 2, 3, 4)).to.throw();
  });

  it("should throw an error when input is not a number", () => {
    (() => checkPositivity("ahmed")).should.throw();
  });
});

describe("Test Mult", () => {
  it("should throw an error when input is less than 0", () => {
    expect(() => Mult(-2)).to.throw();
  });
  it("should return number above zero", () => {
    assert.isAbove(Mult(2), 0);
  });
});

describe("Test nested object", () => {
  it("should check for existence of nested object", () => {
    expect({ obj3 }).to.nested.deep.include({ "obj3.a.b[0]": { x: 1 } });
  });
});
