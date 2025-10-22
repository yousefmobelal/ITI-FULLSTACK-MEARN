class Product {
  handle() {}
}
class ConcreteProduct1 extends Product {
  constructor() {
    super();
    // console.log("ConcreteProduct1");
  }
  handle() {
    console.log("ConcreteProduct1");
  }
}

class ConcreteProduct2 extends Product {
  constructor() {
    super();
  }
  handle() {
    console.log("ConcreteProduct2");
  }
}

class ConcreteProduct3 extends Product {
  constructor() {
    super();
  }
  handle() {
    console.log("ConcreteProduct3");
  }
}

class Context {
  constructor(state) {
    switch (state) {
      case "A":
        this.state = new ConcreteProduct1();
        break;
      case "B":
        this.state = new ConcreteProduct2();
        break;
      default:
        this.state = new ConcreteProduct3();
    }
  }
  Request() {
    this.state.handle(this);
  }
}

let c1 = new Context("A");
c1.Request();
let c2 = new Context("B");
c2.Request();
