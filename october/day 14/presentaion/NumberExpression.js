const IExpression = require("./IExpression");

class NumberExpression extends IExpression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}

module.exports = NumberExpression;
