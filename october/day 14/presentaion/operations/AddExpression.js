const IExpression = require("../IExpression");

class AddExpression extends IExpression {
  constructor(leftExpression, rightExpression) {
    super();
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret(context) {
    const left = this.leftExpression.interpret(context);
    const right = this.rightExpression.interpret(context);
    const result = left + right;
    context.addSolutionStep("+", left, right, result);
    return result;
  }
}

module.exports = AddExpression;
