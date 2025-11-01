const { MathUtils, sayHelloWorld, obj, DoSomeThing } = require("../index.js");
describe("test MathUtils", () => {
  let math;
  beforeAll(() => {
    math = new MathUtils();
  });
  // ? toBe() --> compare btn value and ref
  //? toEqual()--> compare value
  it("Sum: should return 10 when input is 2 and 8", () => {
    expect(math.sum(2, 8)).toEqual(jasmine.any(Number));
  });

  it("Subtract: should return 6 when input is 8 and 2", () => {
    expect(math.subtract(8, 2)).toEqual(6);
  });

  it("Mulitply: should return 15 when input is 5 and 3", () => {
    expect(math.multiply(5, 3)).toEqual(15);
  });

  it("Divide: should return 3 when input is 12 and 4", () => {
    expect(math.divide(12, 4)).toEqual(3);
  });

  it("Average: should return 9 when input is 10 ana 8", () => {
    expect(math.average(10, 8)).toEqual(9);
  });

  it("Factorial: should throw error when input is less than 0", () => {
    expect(() => math.factorial(-2)).toThrow();
  });

  it("Factorial: should return 1 if input is 1", () => {
    expect(math.factorial(1)).toEqual(1);
  });

  it("Factorial: should return 1 if input is 0", () => {
    expect(math.factorial(0)).toEqual(1);
  });

  it("Factorial: factorial should be called 5 times when input is 5", () => {
    spyOn(math, "factorial").and.callThrough();
    math.factorial(5);
    expect(math.factorial).toHaveBeenCalledTimes(5);
  });

  it("Factorial: should return 120 if input is 5", () => {
    expect(math.factorial(5)).toEqual(120);
  });

  it("CheckPositivity: return false if number is less than 0", () => {
    expect(math.checkPositivity(-2)).toEqual(false);
  });

  it("CheckPositivity: return true if number is larger than 0", () => {
    expect(math.checkPositivity(10)).toEqual(true);
  });
});

xdescribe("Test SpyOn", () => {
  it("sayHelloWorld", () => {
    spyOn(obj, "hello");
    sayHelloWorld(obj);
    sayHelloWorld(obj);
    //   expect(obj.hello).toHaveBeenCalled()
    expect(obj.hello).toHaveBeenCalledTimes(2);
    expect(obj.hello).toHaveBeenCalledWith(4);
  });
});

xdescribe("create custom matcher", () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeGreaterThan100: function () {
        return {
          compare: function (actual) {
            let result = {};
            result.pass = actual > 100;
            result.message = "you should insert num > 100";
            return result;
          },
        };
      },
    });
  });
  it("test", () => {
    expect(20).toBeGreaterThan100();
  });
});

xdescribe("study clock", () => {
  beforeAll(() => {
    jasmine.clock().install();
  });
  afterAll(() => {
    jasmine.clock().uninstall();
  });
  it("test x", () => {
    let x = 5;
    setTimeout(() => {
      x = 10;
    }, 1000);
    expect(x).toEqual(5);
    jasmine.clock().tick(2000);
    expect(x).toEqual(10);
  });
});
xdescribe("mock fun", () => {
  beforeAll(() => {
    jasmine.clock().install();
  });
  afterAll(() => {
    jasmine.clock().uninstall();
  });
  it("", () => {
    let callback = jasmine.createSpy("callback");
    DoSomeThing(callback);
    jasmine.clock().tick(1000);
    expect(callback).toHaveBeenCalledOnceWith(123);
  });
});
