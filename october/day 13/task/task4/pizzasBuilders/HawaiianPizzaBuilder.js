const PizzaBuilder = require("./PizzaBuilder.js");
const Pizza = require("../Pizza.js");

class HawaiianPizzaBuilder extends PizzaBuilder {
  constructor() {
    super();
    this.reset();
  }

  reset() {
    this.pizza = new Pizza();
  }

  setSize(size) {
    this.pizza.setSize(size);
  }

  addCheese() {
    this.pizza.addCheese();
  }

  addPepperoni() {}

  addBacon() {
    this.pizza.addBacon();
  }

  getResult() {
    const result = this.pizza;
    this.reset();
    return result;
  }
}

module.exports = HawaiianPizzaBuilder;
