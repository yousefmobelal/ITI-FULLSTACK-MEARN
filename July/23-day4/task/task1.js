//1
var password = "p@$$";
var enteredPassword;
while (enteredPassword != password) {
  enteredPassword = prompt("Enter your password");
}

//2
var sumOfEvenNumbers = 0;
for (var i = 0; i <= 100; i += 2) {
  sumOfEvenNumbers += i;
}
console.log(sumOfEvenNumbers);

//3
function operation(firstNumber, operation, secondNumber) {
  switch (operation) {
    case "sum":
      alert(
        firstNumber + " + " + secondNumber + "= " + (firstNumber + secondNumber)
      );
      break;
    case "multi":
      alert(
        firstNumber + " * " + secondNumber + "= " + firstNumber * secondNumber
      );
      break;
    case "subtract":
      alert(
        firstNumber + " - " + secondNumber + "= " + (firstNumber - secondNumber)
      );
      break;
    case "division":
      alert(
        firstNumber + " / " + secondNumber + "= " + firstNumber / secondNumber
      );
      break;

    default:
      break;
  }
}

var firstNumber = parseInt(prompt("Enter your first number"));
var choosenOperatoin = prompt(
  "Enter operation [sum ,multi ,subtract ,division]"
);
var secondNumber = parseInt(prompt("Enter your second number"));
operation(firstNumber, choosenOperatoin, secondNumber);

//4
function login() {
  var username = prompt("Enter your user name");
  var password = prompt("Enter your password");
  if (username !== "amdin" && password !== "421$$") {
    throw "Your user name and password are incorrect";
  }
  if (username !== "admin") {
    throw "Your user name is incorrect";
  }
  if (password !== "421$$") {
    throw "Your password is incorrect";
  }
  alert("Welcome login success");
}

try {
  login(enteredUserName, enteredPassword);
} catch (e) {
  alert(e);
}

//5
function guessNumber() {
  var randomNumber = Math.floor(Math.random() * 10);
  var number;
  while (number != randomNumber) {
    console.log(randomNumber);
    var number = prompt("Enter a number between 0 and 9");
    if (number == randomNumber) {
      alert("You guessed the correct number");
    }
  }
}

guessNumber();

//6
var birthDate = prompt("Enter your birth date in this format: DD–MM–YYYY");

function showBirthDate(date) {
  if (date.length == 10 && date[2] == "-" && date[5] == "-") {
    var day = parseInt(date.slice(0, 2));
    var month = parseInt(date.slice(3, 5));
    var year = parseInt(date.slice(6, 10));

    var newDate = new Date(year, month, day);
    alert(newDate);
  } else {
    alert("Wrong Date Format");
  }
}

showBirthDate(birthDate);

//7
function getDayOfWeek(date) {
  var day = date.getDay();
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;

    default:
      break;
  }
  return day;
}

var date = new Date(2025, 6, 23);
console.log(getDayOfWeek(date));

//8
function numberOfVowels() {
  var enteredStr = prompt("Enter a string to count the number of vowels in it");

  var numberOfOcurrencesForA = 0;
  var numberOfOcurrencesForO = 0;
  var numberOfOcurrencesForE = 0;
  var numberOfOcurrencesForU = 0;
  var numberOfOcurrencesForI = 0;

  for (var i = 0; i < enteredStr.length; i++) {
    var character = enteredStr.toLowerCase()[i];
    if (character === "a") {
      numberOfOcurrencesForA++;
    }
    if (character === "e") {
      numberOfOcurrencesForE++;
    }
    if (character === "o") {
      numberOfOcurrencesForO++;
    }
    if (character === "u") {
      numberOfOcurrencesForU++;
    }
    if (character === "i") {
      numberOfOcurrencesForI++;
    }
  }

  alert(
    "Number of vowels in " +
      enteredStr +
      " a= " +
      numberOfOcurrencesForA +
      " ,e= " +
      numberOfOcurrencesForE +
      " ,o= " +
      numberOfOcurrencesForO +
      " ,u= " +
      numberOfOcurrencesForU +
      " ,i= " +
      numberOfOcurrencesForI
  );
}

numberOfVowels();
