function Employee(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Employee.prototype.info = function () {
  setTimeout(
    function () {
      alert("Hello ya: " + this.firstName);
    }.bind(this),
    2000
  );
};

var emp1 = new Employee("Yousef", "Mohamed", 24);
emp1.info();
