// Select the database to use.
use("ITI");

db.instructors.deleteMany({});
//1 insert your own data
db.instructors.insertOne({
  firstName: "Ahmed",
  lastName: "Mohamed",
  age: 28,
  gamer: true,
  courses: ["css", "html", "javascript"],
});

// insert without firstName and LastName
db.instructors.insertOne({
  age: 25,
  course: ["React", "Angular"],
});

// insert from array
let instructorsArray = [
  {
    id: 1,
    firstName: "noha",
    lastName: "hesham",
    age: 21,
    salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "mvc", "signalR", "expressjs"],
  },

  {
    id: 2,
    firstName: "mona",
    lastName: "ahmed",
    age: 21,
    salary: 3600,
    address: { city: "cairo", street: 20, building: 8 },
    courses: ["es6", "mvc", "signalR", "expressjs"],
  },

  {
    id: 3,
    firstName: "mazen",
    lastName: "mohammed",
    age: 21,
    salary: 7040,
    address: { city: "Ismailia", street: 10, building: 8 },
    courses: ["asp.net", "mvc", "EF"],
  },

  {
    id: 4,
    firstName: "ebtesam",
    lastName: "hesham",
    age: 21,
    salary: 7500,
    address: { city: "mansoura", street: 14, building: 3 },
    courses: ["js", "html5", "signalR", "expressjs", "bootstrap"],
  },

  {
    id: 5,
    firstName: "ahmed",
    lastName: "ali",
    age: 30,
    salary: 5000,
    address: { city: "alexandria", street: 5, building: 12 },
    courses: ["python", "django", "flask"],
  },

  {
    id: 6,
    firstName: "sara",
    lastName: "kamal",
    age: 27,
    salary: 4200,
    address: { city: "cairo", street: 22, building: 6 },
    courses: ["angular", "typescript", "rxjs"],
  },

  {
    id: 7,
    firstName: "omar",
    lastName: "waled",
    age: 25,
    salary: 6700,
    address: { city: "giza", street: 18, building: 9 },
    courses: ["react", "redux", "nextjs"],
  },

  {
    id: 8,
    firstName: "yasmine",
    lastName: "fathy",
    age: 29,
    salary: 5800,
    address: { city: "cairo", street: 30, building: 15 },
    courses: ["java", "spring boot", "hibernate"],
  },

  {
    id: 9,
    firstName: "mohamed",
    lastName: "hosny",
    age: 35,
    salary: 8200,
    address: { city: "aswan", street: 8, building: 2 },
    courses: ["nodejs", "expressjs", "mongodb"],
  },

  {
    id: 10,
    firstName: "laila",
    lastName: "tarek",
    age: 26,
    salary: 4600,
    address: { city: "cairo", street: 12, building: 4 },
    courses: ["ui/ux", "figma", "css", "tailwind"],
  },
];

db.instructors.insertMany(instructorsArray);

//7
//a
db.instructors.find({});
//b
db.instructors.find({}, { firstName: 1, lastName: 1, address: 1 });
///c
db.instructors.find({ age: 21 }, { firstName: 1, "address.city": 1 });
//d
db.instructors.find({ "address.city": "mansoura" }, { firstName: 1, age: 1 });
//e
//1
// find doc with firstName= mona and then project lastName with string "ahmed"
// this values assigned to all the docs's lastName with firstName= mona
// so lastName will be the only returned field with value "ahmed"
db.instructors.find(
  { firstName: "mona" },
  { lastName: "kh" },
  { firstName: 1, lastName: 1 }
);
//2
// return all the docs with courses contain mvc and return firstName and courses only
db.instructors.find({ courses: "mvc" }, { firstName: 1, courses: 1 });
