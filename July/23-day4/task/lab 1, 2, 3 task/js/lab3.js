//1
var numericalGrade = prompt("Enter a numerical grade");

//2
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
