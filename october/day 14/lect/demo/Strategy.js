class IQuack{}
class NormalQuack extends IQuack{
    constructor(){
        super();
        console.log("NormalQuack");
    }
}
class Squacky extends IQuack{
    constructor(){
        super()
        console.log("Squacky");
    }
}

class IFly{}
class NormalFly extends IFly{
    constructor(){
        super();
        console.log("NormalFly");
    }
}
class NoFly extends IFly{
    constructor(){
        super();
        console.log("NoFly");
    }
}
class FlyRocketSpeed extends IFly{
    constructor(){
        super();
        console.log("FlyRocketSpeed");
    }
}

//? Abstract class
class Duck{
    constructor(ifly,iquack){
        this._flyBehavior = ifly;
        this._quackBehavior = iquack
    }
    set FlyBehavior(ifly){
        this._flyBehavior = ifly
    }

    Swim(){}
    Display(){}
}

class MullardDuck extends Duck{
    constructor(ifly,iquack){
        super(ifly,iquack)
    }
    Display(){
        console.log("MullardDuck");
    }
}

let mullard = new MullardDuck(new NormalFly(),new NormalQuack());
mullard.Display()
mullard.FlyBehavior = new FlyRocketSpeed();