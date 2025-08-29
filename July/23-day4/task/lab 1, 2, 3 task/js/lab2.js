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