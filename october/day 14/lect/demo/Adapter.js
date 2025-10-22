class MyCode{
    constructor(){
        this.adapt = new Adapter();
    }
    Method(){
        return this.adapt.SpecificMethod()
    }
}

class Vendor{
    constructor(){}
    SpecificMethod(){
        console.log("SpecificMethod from Vendor");
    }
}

class Adapter extends Vendor{
    constructor(){
        super();
    }
}

let mycode = new MyCode();
mycode.Method()