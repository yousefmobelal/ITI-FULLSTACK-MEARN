const AbstractCreator = require("./AbstractCreator.js");
const ScienceStudent = require("../students/ScienceStudent.js");

class ScienceStudentCreator extends AbstractCreator {
  FactoryMethod() {
    return new ScienceStudent();
  }
}

module.exports = ScienceStudentCreator;
