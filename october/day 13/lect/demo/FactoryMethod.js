class AbstractProduct{
}
class Product extends AbstractProduct{
    constructor(){
        super()
        console.log("Product is Created");
    }
}
class AbstractCreator{
    constructor(){}
    FactoryMethod(){} //? abstract method
    AnotherMethod(){
        this.pro = this.FactoryMethod()

    }

}
class Creator extends AbstractCreator{
    constructor(){
        super()
    }
    FactoryMethod(){
        return new Product();
    }
}
let c1 = new Creator();
console.log(c1.AnotherMethod());