const HawaiianPizzaBuilder = require("./pizzasBuilders/HawaiianPizzaBuilder");
const MeatLoversPizzaBuilder = require("./pizzasBuilders/MeatLoversPizzaBuilder");

class PizzaDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeSmallHawaiian() {
    this.builder.reset();
    this.builder.setSize("small");
    this.builder.addCheese();
    this.builder.addBacon();
    return this.builder.getResult();
  }

  makeLargeMeatLovers() {
    this.builder.reset();
    this.builder.setSize("large");
    this.builder.addCheese();
    this.builder.addPepperoni();
    this.builder.addBacon();
    return this.builder.getResult();
  }
}

const hawaiianBuilder = new HawaiianPizzaBuilder();
const director1 = new PizzaDirector(hawaiianBuilder);
const pizza1 = director1.makeSmallHawaiian();
console.log(pizza1.toString());

const meatBuilder = new MeatLoversPizzaBuilder();
const director2 = new PizzaDirector(meatBuilder);
const pizza2 = director2.makeLargeMeatLovers();
console.log(pizza2.toString());
