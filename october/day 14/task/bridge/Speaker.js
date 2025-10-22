const Device = require("./Device");

class Speaker extends Device {
  constructor() {
    super();
    this.volume = 5;
  }

  increaseVolume() {
    this.volume++;
    console.log(`Speaker volume increased to ${this.volume}`);
  }

  decreaseVolume() {
    this.volume--;
    console.log(`Speaker volume decreased to ${this.volume}`);
  }
}

module.exports = Speaker;
