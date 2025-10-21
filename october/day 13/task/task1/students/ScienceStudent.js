const AbstractStudent = require("./AbstractStudent");

class ScienceStudent extends AbstractStudent {
  constructor() {
    super();
    console.log("Science Student is created");
  }

  getInfo() {
    return "I am a Science Student specializing in Physics, Chemistry, and Biology.";
  }
}

module.exports = ScienceStudent;
