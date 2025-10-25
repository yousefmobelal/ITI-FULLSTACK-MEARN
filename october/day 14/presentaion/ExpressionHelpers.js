const NumberExpression = require("./NumberExpression");
const AddExpression = require("./operations/AddExpression");
const SubtractExpression = require("./operations/SubtractExpression");
const MultiplyExpression = require("./operations/MultiplyExpression");

class ExpressionHelpers {
  static operators = ["+", "-", "*"];

  static isOperator(symbol) {
    return this.operators.includes(symbol);
  }

  static getNonterminalExpression(symbol, left, right) {
    switch (symbol) {
      case "+":
        return new AddExpression(left, right);
      case "-":
        return new SubtractExpression(left, right);
      case "*":
        return new MultiplyExpression(left, right);
      default:
        throw new Error("Expression is not defined.");
    }
  }

  static buildExpressionTree(postfixExpression) {
    const stack = [];
    const symbols = postfixExpression.split(" ");
    for (const symbol of symbols) {
      if (this.isOperator(symbol)) {
        const right = stack.pop();
        const left = stack.pop();
        const nonterminal = ExpressionHelpers.getNonterminalExpression(
          symbol,
          left,
          right
        );
        stack.push(nonterminal);
      } else {
        const numberExpr = new NumberExpression(parseInt(symbol, 10));
        stack.push(numberExpr);
      }
    }
    return stack.pop();
  }
}

module.exports = ExpressionHelpers;
