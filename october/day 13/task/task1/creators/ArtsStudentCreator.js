const AbstractCreator = require("./AbstractCreator.js");
const ArtsStudent = require("../students/ArtsStudent.js");

class ArtsStudentCreator extends AbstractCreator {
  FactoryMethod() {
    return new ArtsStudent();
  }
}

module.exports = ArtsStudentCreator;
