class AbstractStudent {
  constructor() {
    if (new.target === AbstractStudent) {
      throw new Error(
        "Cannot instantiate abstract class AbstractStudent directly."
      );
    }
  }

  getInfo() {
    throw new Error("Abstract method 'getInfo' must be implemented.");
  }
}

module.exports = AbstractStudent;
