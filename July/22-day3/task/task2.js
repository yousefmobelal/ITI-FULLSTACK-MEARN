//1
var input = parseInt(
  prompt("Enter a number to check if it's positive or negative or zero")
);
if (input > 0) {
  console.log("positive");
} else if (input < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

//2
var wantToProceed = confirm("Do you want to proceed?");
if (wantToProceed) {
  alert("You choose to proceed");
} else {
  alert("Action canceled");
}

//3
var num = 10;
num % 2 === 0 ? console.log("hi") : console.log("hello");

//4
var age = parseInt(prompt("Enter your age"));
while (age) {
  if (age >= 1 && age <= 10) {
    console.log("Your are a child");
  } else if (age >= 11 && age <= 18) {
    console.log("Your are a teenager");
  } else if (age >= 19 && age <= 50) {
    console.log("Your are grown");
  } else if (age > 50) {
    console.log("Your are old");
  }
  age = parseInt(prompt("Enter your age"));
}

//5
var hour = parseInt(prompt("Enter current hour"));
if (isNaN(hour) || hour < 0 || hour > 23) {
  alert("Please enter a valid hour between 0 and 23.");
} else {
  var period = hour >= 12 ? "PM" : "AM";
  var hour12 = hour % 12;
  if (hour12 == 0) {
    hour12 = 12;
  }
  alert(hour12 + period);
}

//6
var enteredString = prompt("Enter input to make it in Uppercase");
console.log(enteredString[0].toUpperCase() + enteredString.slice(1));

//7
var favoriteColor = prompt("Enter your favorite color");
if (favoriteColor) {
  var confirmColor = confirm(
    "You choose " + favoriteColor + ".Is that correct?"
  );
  if (confirmColor) {
    alert("Great choice!");
  } else {
    alert("Let's try again");
  }
}

//8
var firstDate = new Date("2024-07-20");
var secondDate = new Date("2024-07-22");

if (firstDate < secondDate) {
  console.log("firstDate is earlier than secondDate");
} else if (firstDate > secondDate) {
  console.log("firstDate is later than secondDate");
} else {
  console.log("firstDate and secondDate are the same");
}

//9
var date1 = new Date("2025-06-20");
var date2 = new Date("2025-06-27");
var oneDay = 1000 * 60 * 60 * 24;

console.log(Math.abs(date1 - date2) / oneDay);

//10
var str = "Hello World!";
console.log(str.substring(6, 11));

//11
var floatNumber = 5.678;
console.log(floatNumber.toFixed(2));

//12
var enteredNumber = prompt(
  "Entere a number to check if it's divisible by both 3 and 5"
);
if (enteredNumber % 3 == 0 && enteredNumber % 5 == 0) {
  console.log("true");
} else {
  console.log("false");
}
