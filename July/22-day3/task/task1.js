//1
var name = "John";
console.log(name);

//2
var x = 10;
var y =20;
var sum = x+y;
console.log(sum);

//3
var city;
console.log(city);
city = "Cairo";
console.log(city);

//4
alert("Welcome to our website!");

//5
var response = confirm("Are you sure you want to delete this item?");
console.log(response);

//6
var firstName = prompt("Please enter your first name.");
var lastName = prompt("Please enter your last name.");
var fullName = firstName + " " + lastName;

confirm("Your full name is " + fullName)
var birthYear = prompt("Please enter your birth year.");

var date = new Date();
var year = date.getFullYear();
var age = year-parseInt(birthYear)
alert("Welcome "+ fullName + " your are " +  age + " years old.")

//7
alert("This is the first release of a calculator that only has a summation feature.")
var firstNumber = prompt("Enter the first number");
var secondNumber = prompt("Enter the second number");
var summation = parseFloat(firstNumber) + parseFloat(secondNumber);

alert(firstNumber + " + "+ secondNumber + " = " + summation);

//8
var salary;
console.log(typeof salary);

//9
var a = 5;
var b = 10;
a = a + b
b = a - b
a = a - b

console.log("a= " + a + "b= " + b);

