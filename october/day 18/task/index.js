//& https://www.chaijs.com/api/bdd/#method_ownpropertydescriptor
//? npm i mocha chai -D
//?
//*problem 1
//* input: "hamada" ===> output: HAMADA. expect
//* input: 12 ===> output: "".   expect

function capitalizeText(input) {
  if (arguments.length > 1) {
    throw new Error("You should provide one input only");
  }
  if (typeof input !== "string") {
    throw new TypeError("parameter should be string");
  }
  return input.toUpperCase();
}

//? test that the function takes a string  it will return a string
//? test that the function takes a string and return it after capitalize it
//? test if the function takes number it will throw type error says parameter should be string
//? make sure that this function accept one param only
//& ////////////////////////////////////////////////////////

//* problem 2
//* input number 3 ==> output should be [0,1,2]

const createArray = (number) => {
  if (typeof number !== "number") {
    throw new TypeError("input should be a number");
  }
  const myArray = Array.from(Array(number).keys());
  return myArray;
};

//? test that the return value of type array
//? test if we pass 3 it will return array of length 3 and test it's include 1
//? try to use different styles (expect , should , assert)

//^ createArray(3)>>>>>[0,1,2]
//^ createArray(5)>>>[0,1,2,3,4]
//& ////////////////////////////////////////////////////////

//* problem 3
let obj = { id: 1 };
let obj1 = { x: obj };
let obj2 = { x: obj };
//? check whether obj1 is equal to obj2 using expect , should and assert

//& ////////////////////////////////////////////////////////

//* problem 4
function checkPositivity(x) {
  if (arguments.length > 1) {
    throw new Error("You should provide one input only");
  }
  if (typeof x !== "number") {
    throw new TypeError("Input must be a number");
  }
  if (x > 0) {
    return true;
  } else {
    return false;
  }
}

//? check the expected value using expect , should and assert if x = 4 , x = -1 and x=0
//& ////////////////////////////////////////////////////////
//* problem 5
function Mult(x) {
  if (x < 0) {
    throw new Error("Input must be greater than 0");
  }
  return x * 2;
}
//? using assert
//? 1- make sure that x > 0
//? 2- make sure that the returned number will be above zero

//& ////////////////////////////////////////////////////////////

//* problem 6
let obj3 = { a: { b: [{ x: 1 }] } };
//? using assert check 'a.b[0]' will include {x: 1}

// export { capitalizeText, createArray, obj1, obj2, checkPositivity, Mult, obj3 };
