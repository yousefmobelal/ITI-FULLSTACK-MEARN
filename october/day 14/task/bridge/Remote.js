class Remote {
  constructor(device) {
    this.device = device;
  }

  increase() {
    this.device.increaseVolume();
  }

  decrease() {
    this.device.decreaseVolume();
  }
}

module.exports = Remote;
