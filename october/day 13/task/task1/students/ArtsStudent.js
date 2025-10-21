const AbstractStudent = require("./AbstractStudent");

class ArtsStudent extends AbstractStudent {
  constructor() {
    super();
    console.log("Arts Student is created");
  }

  getInfo() {
    return "I am an Arts Student focusing on Literature, History, and Philosophy.";
  }
}

module.exports = ArtsStudent;
