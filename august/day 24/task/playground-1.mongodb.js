let courses = [
  { name: "Course 1", finalMark: 100 },
  { name: "Course 2", finalMark: 80 },
  { name: "Course 3", finalMark: 60 },
  { name: "Course 4", finalMark: 50 },
  { name: "Course 5", finalMark: 120 },
];

let faculties = [
  {
    name: "Faculty 1",
    address: "Address 1",
  },
  {
    name: "Faculty 2",
    address: "Address 2",
  },
  {
    name: "Faculty 3",
    address: "Address 3",
  },
  {
    name: "Faculty 4",
    address: "Address 4",
  },
];

let students = [
  {
    firstName: "Ahmed",
    lastName: "Mohamed",
    isFired: false,
    facultyId: ObjectId("68b80fa9144318c127f67b94"),
    courses: [
      {
        courseId: ObjectId("68b80fa9144318c127f67b9a"),
        grade: 80,
      },
      {
        courseId: ObjectId("68b80fa9144318c127f67b9b"),
        grade: 60,
      },
    ],
  },
  {
    firstName: "Hesham",
    lastName: "Ali",
    isFired: true,
    facultyId: ObjectId("68b80fa9144318c127f67b95"),
    courses: [
      {
        courseId: ObjectId("68b80fa9144318c127f67b9a"),
        grade: 30,
      },
      {
        courseId: ObjectId("68b80fa9144318c127f67b9b"),
        grade: 20,
      },
    ],
  },
];

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

db.student.aggregate([
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", " $lastName"] },
      averageGrade: { $avg: "$courses.grade" },
    },
  },
]);

db.course.aggregate([
  {
    $group: {
      _id: null,
      totalMarks: { $sum: "$finalMark" },
    },
  },
]);

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

// $count => counts the number of documents
db.student.aggregate([
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$_id",
      totalCourses: { $sum: { count: 1 } },
    },
  },
]);
