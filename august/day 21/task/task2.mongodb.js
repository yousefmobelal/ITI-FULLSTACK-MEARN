let instructorsArray = [
  {
    id: 1,
    firstName: "noha",
    lastName: "hesham",
    age: 21,
    salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "jquery", "mvc", "signalR", "expressjs"],
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

//! 1
// a
db.instructors.find();

// b
db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 });

// c
db.instructors.find({ age: { $lte: 25 } });

// d
db.instructors.find(
  { "address.city": "mansoura", "address.street": { $in: [10, 14] } },
  { firstName: 1, address: 1, salary: 1 }
);

// e
db.instructors.find({ courses: { $all: ["js", "jquery"] } });

//f
db.instructors.find({}).forEach((inst) => {
  print(`${inst.firstName} ${inst.courses.length}`);
});

//g
let newInstructorsData = [];
db.instructors
  .find({
    firstName: { $exists: true },
    lastName: { $exists: true },
  })
  .sort({
    firstName: 1,
    lastName: -1,
  })
  .forEach((inst) => {
    let fullName = inst.firstName + " " + inst.lastName;
    let age = inst.age;
    print(`FullName: ${fullName}, Age: ${age}`);
    newInstructorsData.push({
      FullName: fullName,
      age: age,
    });
  });
db.instructorsData.insertMany(newInstructorsData);
db.instructorsData.find();

//h
db.instructors.find({
  $or: [{ firstName: "mohammed" }, { lastName: "mohammed" }],
});

//i
db.instructors.deleteOne({ firstName: "ebtesam", courses: { $size: 5 } });

//j
db.instructors.updateMany({}, { $set: { active: true } });

//k
db.instructors.updateOne(
  { firstName: "mazen", lastName: "mohammed", courses: "EF" },
  { $set: { "courses.$": "jquery" } }
);

//l
db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $push: { courses: "jquery" } }
);

//m
db.instructors.updateOne(
  { firstName: "ahmed", lastName: "mohammed" },
  { $unset: { courses: "" } }
);

//n
db.instructors.updateMany(
  { courses: { $size: 3 } },
  { $inc: { salary: -500 } }
);

//o
db.instructors.updateMany({}, { $rename: { address: "fullAddress" } });

//p
db.instructors.updateOne(
  { _id: ObjectId("68b4120d76a31ee1c122c871") },
  { $set: { "fullAddress.street": 20 } }
);

//! every - slice - position

//every
// MongoDB has $all
// Mongoose has $every which is a syntatic sugar for $all.

//slice
// slice: number => it will return that number of elements
// [skip number, number of elements to return from the position after skipping]
// skip number can be positive or negative
// negative: skip from the end
// positive: skip from the start
db.instructors.find(
  { _id: ObjectId("68b4120d76a31ee1c122c874") },
  { courses: { $slice: [-3, 2] } }
);

//position
// it can be positive or negative
// positive: at that index
// negative: go back from the end these steps and before that index insert element
db.instructors.updateOne(
  { _id: ObjectId("68b4120d76a31ee1c122c872") },
  {
    $push: {
      courses: {
        $each: ["HTML", "js"],
        $position: -2,
      },
    },
  }
);
