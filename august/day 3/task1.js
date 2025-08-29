function Shape(height, width) {
  if (this.constructor === Shape) {
    throw new Error(
      "This is an abstract class you can't create an instance of it."
    );
  }
  Object.defineProperty(this, "height", {
    value: height,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  Object.defineProperty(this, "width", {
    value: width,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "area", {
    value: height * width,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  Object.defineProperty(this, "perimeter", {
    value: height * 2 + width * 2,
    writable: false,
    enumerable: false,
    configurable: false,
  });
}

Shape.prototype.toString = function () {
  return (
    "Height= " +
    this.height +
    ", width= " +
    this.width +
    ", area= " +
    this.area +
    ", perimeter= " +
    this.perimeter
  );
};

function Rectangle(height, width) {
  Shape.call(this, height, width);
  Rectangle.count++;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.count = 0;
Rectangle.prototype.valueOf = function () {
  return this.area;
};

function Square(side) {
  Rectangle.call(this, side, side);
  Square.count++;
}
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.count = 0;

var rect1 = new Rectangle(10, 20);
var rect2 = new Rectangle(3, 4);
console.log(rect1.area);
console.log(rect2.area);
console.log(rect1 + rect2);
console.log(rect1 - rect2);
console.log(rect1.toString());

var square1 = new Square(10);
console.log("square area: " + square1.area);
console.log(square1.toString());
