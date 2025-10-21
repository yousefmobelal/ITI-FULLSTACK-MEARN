class AbstractCreator {
  constructor() {
    if (new.target === AbstractCreator) {
      throw new Error(
        "Cannot instantiate abstract class AbstractCreator directly."
      );
    }
  }

  FactoryMethod() {
    throw new Error("Abstract method 'FactoryMethod' must be implemented.");
  }

  getInfo() {
    this.student = this.FactoryMethod();
    return this.student.getInfo();
  }
}

module.exports = AbstractCreator;
