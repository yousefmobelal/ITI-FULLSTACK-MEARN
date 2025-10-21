class AbstractProduct{}
class ConcreteProduct1 extends AbstractProduct{}
class ProductA1 extends ConcreteProduct1{
    constructor(){
        super()
        console.log("ProductA1");
    }
}
class ProductB1 extends ConcreteProduct1{
    constructor(){
        super()
        console.log("ProductB1");
    }
}
class ConcreteProduct2 extends AbstractProduct{}
class ProductA2 extends ConcreteProduct2{
    constructor(){
        super()
        console.log("ProductA2");
    }
}
class ProductB2 extends ConcreteProduct2{
    constructor(){
        super()
        console.log("ProductB2");
    }
}

class AbstractFactory{}
class ConcreteFactory1 extends AbstractFactory{
    constructor(){
        super()
    }
    ProductA(){
        return new ProductA1()
    }
    ProductB(){
        return new ProductB1()
    }
}
class ConcreteFactory2 extends AbstractFactory{
    constructor(){
        super()
    }
    ProductA(){
        return new ProductA2()
    }
    ProductB(){
        return new ProductB2()
    }
}

let factory1 = new ConcreteFactory1();
factory1.ProductA()