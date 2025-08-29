var manipulateArr = {
  data: [],
  pushVal: function (val) {
    if (this.hasValue(val)) {
      throw new Error("This value already exists");
    }

    if (this.isEmpty() || this.data[this.data.length - 1] < val) {
      this.data.push(val);
    } else {
      throw new Error("Entered Value is smaller than the last entered element");
    }
  },
  popVal: function () {
    this.data.pop();
  },
  enqueueVal: function (val) {
    if (this.hasValue(val)) {
      throw new Error("This value already exists");
    }

    if (this.isEmpty() || this.data[0] > val) {
      this.data.unshift(val);
    } else {
      throw new Error("Entered Value is larger than the first element");
    }
  },
  dequeueVal: function () {
    this.data.shift();
  },
  display: function () {
    for (var ele of this.data) {
      console.log(ele);
    }
  },
  insertVal: function (index, val) {
    if (this.hasValue(val)) {
      throw new Error("This value already exists");
    }
    if (index < 0 || index > this.data.length) {
      throw new Error("Your index is out of range");
    }
    if (index == 0) {
      return this.enqueueVal(val);
    }
    if (index == this.data.length) {
      return this.pushVal(val);
    }
    if (this.data[index] > val && this.data[index - 1] < val) {
      return this.data.splice(index, 0, val);
    }
    if (this.data[index] < val) {
      throw new Error(
        "Entered Value is larger than the element after it: " + this.data[index]
      );
    }
    if (this.data[index - 1] > val) {
      throw new Error(
        "Entered Value is smaller than the element before it: " +
          this.data[index - 1]
      );
    }
  },
  removeVal: function (val) {
    if (this.hasValue(val)) {
      var indexOfVal = this.data.indexOf(val);
      this.data.splice(indexOfVal, 1);
    } else {
      throw new Error("Data not found");
    }
  },
  hasValue: function (val) {
    return this.data.includes(val);
  },
  isEmpty: function () {
    return this.data.length == 0;
  },
};

manipulateArr.pushVal(5);
manipulateArr.pushVal(3);
manipulateArr.display();
