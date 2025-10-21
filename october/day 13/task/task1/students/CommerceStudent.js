const AbstractStudent = require("./AbstractStudent");

class CommerceStudent extends AbstractStudent {
  constructor() {
    super();
    console.log("Commerce Student is created");
  }

  getInfo() {
    return "I am a Commerce Student studying Economics, Accounting, and Business.";
  }
}

module.exports = CommerceStudent;
