class DVD {
    turnOn() {
        console.log("DVD is turned on");
    }
    start() {
        console.log("DVD is started");
    }
    turnOff() {
        console.log("DVD is turned off");
    }
}

class Sound {
    turnOn() {
        console.log("Sound is turned on");
    }
    start() {
        console.log("Sound is started");
    }
    turnOff() {
        console.log("Sound is turned off");
    }
}

class Projector {
    turnOn() {
        console.log("Projector is turned on");
    }
    start() {
        console.log("Projector is started");
    }
    turnOff() {
        console.log("Projector is turned off");
    }
}

class FacadeSystem {
    constructor() {
        this.dvd = new DVD();
        this.sound = new Sound();
        this.projector = new Projector();
    }

    WatchMovie() {
        this.dvd.turnOn();
        this.sound.turnOn();
        this.projector.turnOn();

        this.dvd.start();
        this.sound.start();
        this.projector.start();

        this.dvd.turnOff();
        this.sound.turnOff();
        this.projector.turnOff();
    }
}

let facade = new FacadeSystem();
facade.WatchMovie();

