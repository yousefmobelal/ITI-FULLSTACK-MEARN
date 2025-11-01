const { MathUtils, sayHelloWorld, obj ,DoSomeThing } = require("../index.js")
xdescribe("test MathUtils", () => {
    let math;
    beforeAll(() => {
        math = new MathUtils()
    })
    // ? toBe() --> compare btn value and ref
    //? toEqual()--> compare value
    it("Sum", () => {
        expect(math.sum(2, 8)).toEqual(jasmine.any(Number))
    })
})

xdescribe("Test SpyOn", () => {
    it("sayHelloWorld", () => {
        spyOn(obj, "hello")
        sayHelloWorld(obj)
        sayHelloWorld(obj)
        //   expect(obj.hello).toHaveBeenCalled()
        expect(obj.hello).toHaveBeenCalledTimes(2)
        expect(obj.hello).toHaveBeenCalledWith(4)
    })
})

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
                    }
                }
            }
        })
    })
    it("test", () => {
        expect(20).toBeGreaterThan100()
    })
})

xdescribe("study clock",()=>{
    beforeAll(()=>{
        jasmine.clock().install()
    });
    afterAll(()=>{
        jasmine.clock().uninstall()
    })
    it("test x",()=>{
     let x = 5;
     setTimeout(()=>{
        x=10
     },1000)
     expect(x).toEqual(5)
     jasmine.clock().tick(2000)
     expect(x).toEqual(10)
    })
})
describe("mock fun",()=>{
     beforeAll(()=>{
        jasmine.clock().install()
    });
    afterAll(()=>{
        jasmine.clock().uninstall()
    })
    it("",()=>{
        let callback = jasmine.createSpy("callback");
        DoSomeThing(callback);
        jasmine.clock().tick(1000);
        expect(callback).toHaveBeenCalledOnceWith(123)
    })
})

