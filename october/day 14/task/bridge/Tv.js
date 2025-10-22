const Device = require("./Device");

class TV extends Device {
  constructor() {
    super();
    this.volume = 10;
  }

  increaseVolume() {
    this.volume++;
    console.log(`TV volume increased to ${this.volume}`);
  }

  decreaseVolume() {
    this.volume--;
    console.log(`TV volume decreased to ${this.volume}`);
  }
}

module.exports = TV;
