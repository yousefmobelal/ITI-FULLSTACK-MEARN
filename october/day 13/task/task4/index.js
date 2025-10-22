const HawaiianPizzaBuilder = require("./pizzasBuilders/HawaiianPizzaBuilder");
const MeatLoversPizzaBuilder = require("./pizzasBuilders/MeatLoversPizzaBuilder");

function makeSmallHawaiian() {
  const pizza = new HawaiianPizzaBuilder();
  pizza.reset();
  pizza.setSize("small");
  pizza.addCheese();
  pizza.addBacon();
  return pizza.getResult();
}

function makeLargeMeatLovers() {
  const pizza = new MeatLoversPizzaBuilder();
  pizza.reset();
  pizza.setSize("large");
  pizza.addCheese();
  pizza.addPepperoni();
  pizza.addBacon();
  return pizza.getResult();
}

const pizza1 = makeSmallHawaiian();
console.log(pizza1.toString());

const pizza2 = makeLargeMeatLovers();
console.log(pizza2.toString());
