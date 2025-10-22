class Color{
    constructor(name){
        this.name = name;
    }
}

class ColorFactory{
    constructor(){
        this.colors = {};
    }
    create(name){
        let color = this.colors[name];
        if(!color){
            color = new Color(name);
            this.colors[name] = color
        }
        return color
    }
}

class Ball{
    constructor(colorName,radius,factory){
        this.radius = radius;
        this.color = factory.create(colorName);
    }
    draw(){
        console.log(`drawing ${this.color.name} with radius ${this.radius}`);
    }
}

let factory = new ColorFactory();
let ball1 = new Ball("red",5,factory);
let ball2 = new Ball("yellow",5,factory);
let ball3 = new Ball("ball",5,factory);
ball1.draw()
ball2.draw()
ball3.draw()