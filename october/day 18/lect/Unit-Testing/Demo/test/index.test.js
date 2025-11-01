import * as chai from "chai";
const { assert, expect } = chai;
chai.should();
import {
  Sum,
  ConvertToArray,
  obj1,
  obj2,
  obj3,
  set1,
  newObj,
  Calculator,
  Shape,
  fetchWithCallback,
  fetchData,
  CheckPositivity
} from "../index.js";

describe("Test Sum Method", () => {
  it("test two positive numbers", () => {
    expect(Sum(2, 8)).equal(10);
    assert.equal(Sum(2, 8), 10);
    Sum(2, 8).should.equal(10);
  });

  it("Test Throw errors", () => {
    // expect(()=>Sum(1,2,3)).throw("")
    // assert.throws(()=>Sum(1),"")
    (() => Sum(1)).should.throw("");
  });
});

describe("Test ConvertToArray Function", () => {
  it("assert", () => {
    assert.lengthOf(ConvertToArray(1, 5, 7), 3);
    assert.isArray(ConvertToArray(1, 2, 3));
    assert.include(ConvertToArray(1, 20, 3), 20);
  });
  it("expect and should", () => {
    expect(ConvertToArray(1, 2, 3))
      .to.be.an("array")
      .to.have.lengthOf(3)
      .that.include(2);
    ConvertToArray(1, 2)
      .should.to.be.an("array")
      .to.have.lengthOf(2)
      .that.include(2);
  });
});

describe("test two objs", () => {
  it("difference btn equal and deep.equal in expect / should", () => {
    expect(obj1).not.equal(obj2); //? compare value and ref
    // expect(obj1).to.deep.equal(obj2)  //? compare value
  });
  it("difference in assert", () => {
    // assert.equal(obj1,obj2) //? primitive and make coercion ==
    assert.equal(3, "3");
    // assert.strictEqual(3,'3') //? ===
    assert.deepEqual(obj1, obj2); //? compare value
  });
});

describe("Test Obj3", () => {
  it("Obj3 keys", () => {
    expect(obj3).to.have.keys("x", "y");
    expect(obj3).to.have.all.keys("x", "y");
    expect(obj3).to.have.any.keys("x");
  });
  it("diff btn keys and property", () => {
    // expect(obj3).to.has.property('y',3)
    // expect(obj3).to.have.any.keys('y')
    // expect(set1).to.has.property('size',3)
  });
  it("test add with obj3", () => {
    // expect(add).to.increase(obj3,'y').by(2)
    // expect(obj3.y).to.be.above(2)
    // expect(obj3).to.has.ownPropertyDescriptor('y').that.has.property('enumerable',false)
    // expect({obj3}).to.nested.include({'obj3.x[1]':2})
    expect(newObj).to.be.sealed;
  });
});

// before(()=>{
//     console.log("before");
// });
// after(()=>{
//     console.log("after");
// });
// beforeEach(()=>{
//     console.log("beforeEach");
// });
// afterEach(()=>{
//     console.log("afterEach");
// })

describe("test Calculator class", () => {
  let calc;
  before(() => {
    calc = new Calculator();
  });
  it("test calc", () => {
    expect(calc).to.be.an.instanceOf(Calculator);
  });
});

describe("Shape", () => {
  it("", () => {
    expect(Shape).itself.respondTo("Print");
    expect(Shape).respondTo("Display");
  });
});

describe("test ", () => {
  it("fetchWithCallback", (done) => {
    fetchWithCallback((res) => {
      expect(res).equal("data");
    });
    done();
  });

  it("fetchData", () => {
    return fetchData().then((res) => {
      expect(res).equal("data");
    });
  });
  it("fetch data with async/await", async () => {
    const res = await fetchData();
    expect(res).equal("data");
  });
});

describe.only("CheckPositivity",()=>{
    it("with positive num",()=>{
       expect(CheckPositivity(2)).equal(true)
    })
     it("with negative num",()=>{
       expect(CheckPositivity(-2)).equal(false)
        
    })
})
