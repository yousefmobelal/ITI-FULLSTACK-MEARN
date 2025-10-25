class ExpressionContext {
  constructor() {
    this.solutionSteps = [];
  }

  addSolutionStep(operatorSymbol, left, right, result) {
    const step = `${
      this.solutionSteps.length + 1
    }) ${left} ${operatorSymbol} ${right} = ${result}`;
    this.solutionSteps.push(step);
  }

  getSolutionSteps() {
    return this.solutionSteps;
  }
}

module.exports = ExpressionContext;
