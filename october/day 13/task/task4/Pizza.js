class Pizza {
  constructor() {
    this.size = null;
    this.cheese = false;
    this.pepperoni = false;
    this.bacon = false;
  }

  setSize(size) {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
  }

  addPepperoni() {
    this.pepperoni = true;
  }

  addBacon() {
    this.bacon = true;
  }

  toString() {
    return `Pizza [size=${this.size}, cheese=${this.cheese}, pepperoni=${this.pepperoni}, bacon=${this.bacon}]`;
  }
}

module.exports = Pizza;
