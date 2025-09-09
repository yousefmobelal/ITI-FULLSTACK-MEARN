//1
const students = new Set([
  "yousef",
  "ahmed",
  "mohamed",
  "ali",
  "yousef",
  "ahmed",
]);

//1.a
console.log(students);
students.add("mohamed");
students.add("ali");
console.log(students);

//1.b
console.log(...students);
for (const element of students) {
  console.log(element);
}

//2
const studentsMap = new Map();
studentsMap.set("Gamal", {
  grades: [
    { courseName: "JavaScript", grade: "Excellent" },
    { courseName: "Jquery", grade: "Good" },
    { courseName: "CSS", grade: "V.Good" },
  ],
});

studentsMap.set("Ahmed", {
  grades: [
    { courseName: "C++", grade: "Excellent" },
    { courseName: "HTML", grade: "Good" },
    { courseName: "BOOTSTRAP", grade: "V.Good" },
  ],
});

for (const [studentName, info] of studentsMap) {
  console.log(`Student: ${studentName}`);
  for (const { courseName, grade } of info.grades) {
    console.log(`${courseName}: ${grade}`);
  }
  console.log("\n");
}

//3
const numbers = [1, 5, 3, 4, 2, 4, 6, 8, 5];
//3.a
console.log(numbers.filter((val) => val % 2 !== 0));
//3.b
numbers.forEach((val) => {
  if (val % 2 === 0) {
    console.log(val);
  }
});
//3.c
numbers.find((val) => val > 5);
//3.d
const newNumbers = numbers.map((val) => val * 2);
console.log(`newNumbers: ${newNumbers}`);

//6
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));

//7
function createCourse({
  courseName = "ES6",
  courseDuration = "3days",
  courseOwner = "JavaScript",
  ...rest
} = {}) {
  if (Object.keys(rest).length > 0) {
    throw new Error(
      `Invalid properties you should only pass [courseName, courseDuration, courseOwner]`
    );
  }
  return `Course Name: ${courseName}, Course Duration: ${courseDuration}, Course Owner: ${courseOwner}`;
}

console.log(createCourse());
console.log(
  createCourse({
    courseName: "C++",
    courseDuration: "1month",
    courseOwner: "Data Structure",
  })
);

//8
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//8.a
console.log(fruits.every((val) => typeof val == "string"));
//8.b
console.log(fruits.some((val) => val.startsWith("a")));
//8.c
var newFruits = fruits.filter(
  (val) => val.startsWith("b") || val.startsWith("s")
);
//8.d
newFruits.forEach((val) => console.log(val));
