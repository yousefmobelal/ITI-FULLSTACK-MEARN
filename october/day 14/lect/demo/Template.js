//? Abstract Class
class Template{
    constructor(){}
    MethodOne(){}  //? Abstract Method
    MethodTwo(){} //? Abstract Method
    TemplateMethod(){
        this.MethodOne()
        this.MethodTwo()
    }
}
class Child extends Template{
    constructor(){
        super();
    }
    MethodOne(){
        console.log("MethodOne");
    }
    MethodTwo(){
        console.log("MethodTwo");
    }
}
let c1 = new Child();
c1.TemplateMethod()

