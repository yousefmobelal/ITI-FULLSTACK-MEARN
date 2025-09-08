console.log("--1--"); //! 1

const people = {
  firstName: "Yousef",
  lastName: "Mohamed",
  age: 24,
};

for (const key in people) {
  console.log(`${key}: ${people[key]}`);
}

console.log("\n\n--2--"); //! 2

const progLanguages = ["C++", "JS", "C#", "Java", "Python", "Dart"];
for (const element of progLanguages) {
  console.log(element);
}

console.log("\n\n--3--"); //! 3

// when "for in" is used on an array it returns the index as key
// but with "for of" it returns elements
for (const element in progLanguages) {
  console.log(element);
}

console.log("\n\n--4--"); //! 4

const [prog1, prog2, ...progs] = progLanguages;
console.log(prog1, prog2, progs);

console.log("\n\n--5--"); //! 5

const student = {
  name: "Ahmed Alaa",
  faculty: "Engineering",
  university: "Cairo",
  grade: "90",
};

console.log(
  `${student.name} is a student in faculty of ${student.faculty} in university ${student.university} And his final grade is ${student.grade}.`
);

console.log("\n\n--6--"); //! 6

console.log("heloo".includes("e"));

console.log("\n\n--7--"); //! 7

const user = {
  name: "Mohamed",
  age: null,
  email: undefined,
  country: "Egypt",
};

console.log(
  `name: ${user.name}, age: ${user.age ?? "-"}, email: ${
    user.email ?? "-"
  }, country: ${user.country ?? "-"}`
);

console.log("\n\n--8--"); //!8

const companies = [
  {
    name: "Tech Company 1",
    location: {
      city: "Cairo",
      address: {
        street: "St.1",
        building: {
          number: 42,
          office: {
            room: "5B",
            occupants: ["Yousef", "Ahmed"],
          },
        },
      },
    },
  },
  {
    name: "Tech Company 2",
    location: {
      city: "Alexandria",
      address: {
        street: "St.2",
      },
    },
  },
];

for (const company of companies) {
  console.log(
    company.location.address.building?.number ?? "No Building Number Available"
  );
}

console.log("\n\n--9--"); //! 9

var obj = { firstName: "Yousef", lastName: "Mohamed" };
var newObj = { ...obj };
obj.firstName = "Ahmed";
console.log(
  `obj.firstName: ${obj.firstName}, newObj.firstName: ${newObj.firstName}`
);

console.log("\n\n--10--"); //! 10

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};

const {
  title,
  translations: [
    {
      locale,
      localization_tags: [firstLang, secondLang],
      last_edit,
      url,
      titles,
    },
  ],
} = metadata;

console.log(
  `title: ${title}, locale: ${locale}, firstLang: ${firstLang}, secondLang: ${secondLang}, last_edit: ${last_edit}, url: ${url}, titles: ${titles}`
);

console.log("\n\n--11--"); //! 11

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8,
};

const movieEntries = Object.entries(movie);
console.log(`orginal movie entries: ${movieEntries}`);
for (let i = 0; i < movieEntries.length; i++) {
  movieEntries[i][0] = movieEntries[i][0].toUpperCase();
}
console.log(`edited movie entries: ${movieEntries}`);

console.log("\n\n--12--"); //! 12

const secret = Symbol("secret");

const account = {
  username: "Yousef",
  email: "test@gmail.com",
  [secret]: "token",
};

// show keys using Object.keys
console.log(Object.keys(account));

// show keys using for in
for (const key in account) {
  console.log(key);
}
