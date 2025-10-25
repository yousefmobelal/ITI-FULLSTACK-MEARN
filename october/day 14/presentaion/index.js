const ExpressionContext = require("./ExpressionContext");
const ExpressionHelpers = require("./ExpressionHelpers");

const postfixExpressions = [
  "20 3 5 * - 2 3 * +",
  "1 1 1 1 1 + + + * 2 -",
  "123 12 1 - - 12 9 * -",
  "9 8 7 6 5 4 3 2 1 + - + - + - + -",
];

for (const expr of postfixExpressions) {
  const context = new ExpressionContext();
  const tree = ExpressionHelpers.buildExpressionTree(expr);
  const result = tree.interpret(context);
  console.log(`Postfix expression: ${expr}`);
  console.log("Solution Steps:");
  context.getSolutionSteps().forEach((step) => console.log(step));
  console.log(`Result: ${result}\n`);
}
