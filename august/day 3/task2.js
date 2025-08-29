function Vehicle(speed, color) {
  this.speed = speed;
  this.color = color;
}

Vehicle.prototype.turnLeft = function () {};
Vehicle.prototype.turnRight = function () {};
Vehicle.prototype.goBackward = function (accel) {};
Vehicle.prototype.goForward = function (accel) {};
Vehicle.prototype.start = function () {
  return true;
};

Vehicle.prototype.stop = function () {
  return false;
};

function Bicycle(speed, color) {
  Vehicle.call(this, speed, color);
}
Bicycle.prototype.ringBell = function () {};
Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

function MotorVehicle(speed, color, sizeOfEngine, licensePlate) {
  Vehicle.call(this, speed, color);
  this.sizeOfEngine = sizeOfEngine;
  this.licensePlate = licensePlate;
}
MotorVehicle.prototype.getSizeOfEngine = function () {
  return this.sizeOfEngine;
};
MotorVehicle.prototype.getLicensePlate = function () {
  return this.licensePlate;
};
MotorVehicle.prototype = Object.create(Vehicle.prototype);
MotorVehicle.prototype.constructor = MotorVehicle;

function DumpTruck(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  loadCapacity,
  numWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.loadCapacity = loadCapacity;
  this.numWheels = numWheels;
  this.weight = weight;
}
DumpTruck.prototype.lowerLoad = function () {};
DumpTruck.prototype.raiseLoad = function () {};
DumpTruck.prototype = Object.create(MotorVehicle.prototype);
DumpTruck.prototype.constructor = DumpTruck;

function Car(
  speed,
  color,
  sizeOfEngine,
  licensePlate,
  numOfDoors,
  numWheels,
  weight
) {
  MotorVehicle.call(this, speed, color, sizeOfEngine, licensePlate);
  this.numOfDoors = numOfDoors;
  this.numWheels = numWheels;
  this.weight = weight;
}
MotorVehicle.prototype.switchOnAirCon = function () {};
MotorVehicle.prototype.getNumOfDoors = function () {
  return numOfDoors;
};
Car.prototype = Object.create(MotorVehicle.prototype);
Car.prototype.constructor = Car;

var bicycle1 = new Bicycle(300, "red");
console.log(bicycle1.goBackward(20));
