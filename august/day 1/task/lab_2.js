var manipulateArr = {
  data: [],
  pushVal: function (val) {
    if (this.hasValue(val)) {
      throw new Error("This value already exists");
    }

    if (this.isEmpty() || this.data[this.data.length - 1].val < val) {
      this.data.push({ val });
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

    if (this.isEmpty() || this.data[0].val > val) {
      this.data.unshift({ val });
    } else {
      throw new Error("Entered Value is larger than the first element");
    }
  },
  dequeueVal: function () {
    this.data.shift();
  },
  display: function () {
    for (var ele of this.data) {
      console.log(ele.val);
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
    if (this.data[index].val > val && this.data[index - 1].val < val) {
      return this.data.splice(index, 0, { val });
    }
    if (this.data[index].val < val) {
      throw new Error(
        "Entered Value is larger than the element after it: " +
          this.data[index].val
      );
    }
    if (this.data[index - 1].val > val) {
      throw new Error(
        "Entered Value is smaller than the element before it: " +
          this.data[index - 1].val
      );
    }
  },
  removeVal: function (val) {
    if (this.hasValue(val)) {
      var index = this.data.findIndex((obj) => obj.val === val);
      this.data.splice(index, 1);
    } else {
      throw new Error("Data not found");
    }
  },
  hasValue: function (val) {
    return this.data.some((obj) => obj.val == val);
  },
  isEmpty: function () {
    return this.data.length == 0;
  },
};

manipulateArr.pushVal(5);
manipulateArr.enqueueVal(2);
manipulateArr.enqueueVal(1);
manipulateArr.removeVal(5);
manipulateArr.pushVal(7);
manipulateArr.pushVal(9);
manipulateArr.popVal();
manipulateArr.dequeueVal();
manipulateArr.insertVal(1, 5);
manipulateArr.display();
