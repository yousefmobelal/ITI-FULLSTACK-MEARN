function TV(){
    this.turnOn = function(){
        console.log("TV is Turned on");
    }
    this.turnOff = function(){
        console.log("TV is Turned off");
    }
}

function Radio(){
    this.turnOn = function(){
        console.log("Radio is Turned on");
    }
    this.turnOff = function(){
        console.log("Radio is Turned off");
    }
}

function ControllerBridge(output){
    this.output = output;
    this.firstClick = function(){
        this.output.turnOn()
    }
     this.secondClick = function(){
        this.output.turnOff()
    }
}

let tv = new TV();
let controller = new ControllerBridge(tv)
controller.firstClick()
controller.secondClick()
let radio = new Radio();
let controller2 = new ControllerBridge(radio)
controller2.firstClick()
controller2.secondClick()