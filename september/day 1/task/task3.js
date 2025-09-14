let courses = [
  { name: "Data Structures & Algorithms", finalMark: 100 },
  { name: "Operating Systems", finalMark: 80 },
  { name: "Database Systems", finalMark: 60 },
  { name: "Computer Networks", finalMark: 50 },
  { name: "Software Engineering", finalMark: 120 },
];

let faculties = [
  {
    name: "Cairo University",
    address: "Cairo",
  },
  {
    name: "Alexandria University",
    address: "Alexandria",
  },
  {
    name: "Mansoura University",
    address: "Mansoura",
  },
  {
    name: "Ain Shams University",
    address: "Cairo",
  },
];

let students = [
  {
    firstName: "Ahmed",
    lastName: "Mohamed",
    isFired: false,
    facultyId: ObjectId("68bc5c6b70653b7166e26139"),
    courses: [
      {
        courseId: ObjectId("68bc5c6b70653b7166e2613d"),
        grade: 80,
      },
      {
        courseId: ObjectId("68bc5c6b70653b7166e2613e"),
        grade: 60,
      },
    ],
  },
  {
    firstName: "Hesham",
    lastName: "Ali",
    isFired: true,
    facultyId: ObjectId("68bc5c6b70653b7166e2613b"),
    courses: [
      {
        courseId: ObjectId("68bc5c6b70653b7166e2613f"),
        grade: 25,
      },
      {
        courseId: ObjectId("68bc5c6b70653b7166e26140"),
        grade: 20,
      },
    ],
  },
];

// 1
use("FacultySystemV2");
db.createCollection("student", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "facultyId", "isFired", "courses"],
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        isFired: {
          bsonType: "bool",
        },
        facultyId: {
          bsonType: "objectId",
        },
        courses: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["courseId", "grade"],
            properties: {
              courseId: {
                bsonType: "objectId",
              },
              grade: {
                bsonType: "number",
              },
            },
          },
        },
      },
    },
  },
});

db.createCollection("faculty", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "address"],
      properties: {
        name: {
          bsonType: "string",
        },
        address: {
          bsonType: "string",
        },
      },
    },
  },
});

db.createCollection("course", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["mark", "finalMark"],
      properties: {
        name: {
          bsonType: "string",
        },
        finalMark: {
          bsonType: "number",
        },
      },
    },
  },
});

db.faculty.insertMany(faculties);
db.course.insertMany(courses);

db.faculty.find();
db.course.find();

db.student.insertMany(students);
db.student.find();

// 2
db.student.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      averageGrade: { $avg: "$courses.grade" },
    },
  },
]);

// 3
db.course.aggregate([
  {
    $group: {
      _id: null,
      totalMarks: { $sum: "$finalMark" },
    },
  },
]);

// 4.1
db.student.aggregate([
  {
    $match: { firstName: "Ahmed" },
  },
  {
    $lookup: {
      from: "course",
      localField: "courses.courseId",
      foreignField: "_id",
      as: "courses",
    },
  },
]);

// 4.2
db.student.aggregate([
  {
    $match: { firstName: "Ahmed" },
  },
  {
    $lookup: {
      from: "faculty",
      localField: "facultyId",
      foreignField: "_id",
      as: "faculty",
    },
  },
]);

// $count => returns the number of documents that pass through the pipeline
// we can use it after $match to count only documents that meet certain conditions
// it outputs a single field with the name we choose like "totalStudents"
// $sum here if we pass field path ($fieldName) it sums all
// values of that field across documents
// and if we pass a constant number it counts the documents in the group
// so here {count: 1} is not a pass field nor a constant number so $sum will
// deal with it as it's a zero and count here is not more than a name for a key
// and it can be anything rather than count and it will still return zero

db.student.aggregate([
  { $match: { isFired: true } },
  { $count: "firedStudents" },
]);

db.student.aggregate([
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$_id",
      totalCourses: { $sum: { count: 1 } },
    },
  },
]);

db.student.aggregate([
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$_id",
      totalCourses: { $sum: 1 },
    },
  },
]);
