function SteppedList(start = 0, end = 10, step = 2) {
  var arr = [];
  for (var i = start; i <= end; i += step) {
    arr.push(i);
  }

  this.getList = function () {
    return arr;
  };

  this.append = function (val) {
    var lastElement = arr[arr.length - 1];
    if (val - step !== lastElement) {
      throw new Error(
        "Wrong value according to your step.The last entered value is " +
          lastElement +
          " and your step is " +
          step
      );
    }
    arr.push(val);
  };

  this.prepend = function (val) {
    var firstElement = arr[0];
    if (val + step !== firstElement) {
      throw new Error(
        "Wrong value according to your step.The first entered value is " +
          firstElement +
          " and your step is " +
          step
      );
    }
    arr.unshift(val);
  };

  this.pop = function () {
    arr.pop();
  };

  this.dequeu = function () {
    arr.shift();
  };
}

var list1 = new SteppedList();
list1.append(12);
list1.prepend(-2);
list1.prepend(-4);
list1.append(14);
list1.pop();
list1.dequeu();
console.log(list1.getList());
