exports.sum = function (a, b) {
  if (typeof a == "string" || typeof b == "string") {
    throw new TypeError("parameters should be numbers");
  } else {
    return a + b;
  }
};

exports.stringReverse = (input) => {
  if (typeof input != "string") {
    throw new TypeError("input should be string");
  }
  let result = "";
  input = input.toString();
  for (var i = input.length - 1; i >= 0; i--) {
    result += input[i];
  }
  return result;
};

exports.removeDuplicate = (array) => {
  let exists = {};
  let result = [];
  let element = null;
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    if (!exists[element]) {
      result.push(element);
      exists[element] = true;
    }
  }
  return result;
};
