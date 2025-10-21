function Car(){
    this.doors = 0;
    this.addParts = function(){
        this.doors = 4;
    }
    this.running = function(){
        console.log(this.doors);
    }
}

function CarBuilder(){
    this.step1 = function(){
        this.car = new Car();
    }
    this.step2 = function(){
        this.car.addParts()
    }
    this.get = function(){
        return this.car;
    }
}

function BuildingObj(){
    this.construct = function(builder){
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

let builder = new CarBuilder();
let obj = new BuildingObj();
let car = obj.construct(builder);
car.running();