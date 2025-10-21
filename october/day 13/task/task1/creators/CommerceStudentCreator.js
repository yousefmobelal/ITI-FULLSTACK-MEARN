const AbstractCreator = require("./AbstractCreator.js");
const CommerceStudent = require("../students/CommerceStudent.js");

class CommerceStudentCreator extends AbstractCreator {
  FactoryMethod() {
    return new CommerceStudent();
  }
}

module.exports = CommerceStudentCreator;
