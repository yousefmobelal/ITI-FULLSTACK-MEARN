class IExpression {
  interpret(context) {
    throw new Error("Must implement interpret()");
  }
}

module.exports = IExpression;
