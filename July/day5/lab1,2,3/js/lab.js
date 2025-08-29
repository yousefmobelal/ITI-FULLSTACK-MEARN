// 4 and 5
// This line prints the name
console.log("Name: Yousef Mohamed");
// This line prints the age
console.log("Age: 24");
// This line prints the favorite programming language
console.log("Favorite programming language: JavaScript");

//!Lab2
//1
var myFirstName = "Yousef";
var myLastName = "Mohamed";
var age = 24;
var isStudent = true;

//2
var firstName;
var LastName;
var age_in_years;

//3
var 123name;
var my-name;
var let;

//4
console.log(myFirstName);
console.log(myLastName);
console.log(age);
console.log(isStudent);

console.log(firstName);
console.log(LastName);
console.log(age_in_years);

//5
var enteredNumber = prompt("Enter your value");
try{
if(enteredNumber>5){
    throw 'Invalid value';
}else{
    alert("Your value is: " + enteredNumber);
}
}
catch(e){
alert(e);
}

//!Lab3
//1 and 2
var enteredGrade = parseInt(prompt("Enter your grade"));
var grade;
if (enteredGrade >= 90 && enteredGrade <= 100) {
  grade = "Excellent";
} else if (enteredGrade >= 75 && enteredGrade <= 89) {
  grade = "Good";
} else if (enteredGrade >= 60 && enteredGrade <= 74) {
  grade = "Pass";
} else if (enteredGrade < 60 && enteredGrade > 0) {
  grade = "Faile";
}

//3
console.log(grade);

//!Lab4
//1
var randomPrice = Math.random() * 90 + 10;

//2
var roundDecimalNumber = randomPrice.toFixed(2);

//!Lab5
//1
var productName = prompt("Enter a product name");

//2
console.log(productName.includes("la"));
console.log(productName.indexOf("p"));
console.log(productName.startsWith("l"));

//3
var input = prompt("Enter some text").toLowerCase();

//!Lab6
//1
var currentDate = new Date();

//2
var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 3);
console.log(currentDate);

//!Lab7

//1
function login() {
  var username = prompt("Enter your username");
  var password = prompt("Enter your password");
  if (username === "admin" && password === "1234") {
    alert("Welcome, " + username);
  } else {
    alert("username or password is incorrectt");
    for (var i = 0; i <= 2; i++) {
      username = prompt("Enter your username");
      password = prompt("Enter your password");
      if (username === "admin" && password === "1234") {
        alert("Welcome, " + username);
        break;
      } else {
        alert("username or password is incorrectt");
      }
    }
  }
}

login();

//2
var enteredPassword = prompt("Enter your password");
var numberOfAttempts = 3;
var password = "1234";
while (numberOfAttempts > 0) {
  if (enteredPassword === password) {
    alert("Welcome");
    break;
  } else {
    numberOfAttempts--;
    if (numberOfAttempts > 0) {
      enteredPassword = prompt("Incorrect password. Please try again.");
    } else {
      alert("You have used all attempts. Access denied.");
    }
  }
}

//3
var enteredPassword;
var password = "123456789";
do {
  var enteredPassword = prompt("Enter your password");
  if (enteredPassword === password) {
    alert("Welcome");
    break;
  }
} while (enteredPassword !== password);

//!Lab8

//1
for (var i = 0; i <= 50; i++) {
  console.log(i);
}

//2
for (var i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

//3
for (var i = 0; i < 20; i++) {
  console.log(i);
  if (i === 15) {
    break;
  }
}

//!Lab9
//1
var enteredNumber = parseInt(prompt("Enter a number"));

//2
let lines = 4;
let triangle = "";

for (let i = 1; i <= lines; i++) {
  for (let j = 1; j <= i; j++) {
    triangle += "*";
  }
  triangle += "\n";
}

console.log(triangle);

//!Lab10
//1
var price = parseInt(prompt("Enter the initial amount"));

//2
price += price * 0.15;
price -= price * 0.1;
price *= 0.95;
price /= 2;

//3
console.log("Final Price:", price.toFixed(2));

//!Lab11
//1
var password = prompt("Enter your password");
//2
var hasLetter = false;
var hasNumber = false;

for (let i = 0; i < password.length; i++) {
  let char = password[i];

  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    hasLetter = true;
  } else if (char >= "0" && char <= "9") {
    hasNumber = true;
  }
}

//3
if (password.length >= 8 && hasLetter && hasNumber) {
  alert("Your password is strong!");
} else {
  alert(
    "Your password is weak. It must be at least 8 characters and contain both letters and numbers."
  );
}

//!Lab12
var generatedPromoCodes = "";
for (var i = 0; i < 4; i++) {
  generatedPromoCodes +=
    "PROMO" + Math.floor(1000 + Math.random() * 9000) + "\n";
}

alert(generatedPromoCodes);

//!Lab13
(function () {
  var username = "Yousef Mohamed";
  console.log(username);
})();
console.log(username);

//!Lab14
function divideNumbers() {
  var num1 = parseInt(prompt("Enter the first number:"));
  var num2 = parseInt(prompt("Enter the second number:"));

  try {
    if (num2 === 0) {
      throw "Division by zero is not allowed.";
    }
    var result = num1 / num2;
    alert("Result: " + result);
  } catch (error) {
    alert(error);
  } finally {
    console.log("The operation has completed.");
  }
}

divideNumbers();
