//1
var car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  details: function () {
    console.log(this.brand + " " + this.model + " (" + this.year + ")");
  },
};

car.details();

//2
var job = {
  title: "Software Engineer",
  company: "Tech Company",
  salary: 15000,
};
for (var key in job) {
  console.log(key, ": ", job[key]);
}

//3
function swapObjectKeysAndValues(obj) {
  var newObj = {};
  for (var key in obj) {
    newObj[obj[key]] = key;
  }
  return newObj;
}

var newObj = swapObjectKeysAndValues({
  name: "Ahmed",
  age: 30,
  city: "Cairo",
});

console.log(newObj);

//4
var person = {
  address: {
    street: "123 Main St",
    city: "Aga",
    country: "Egypt",
  },
  job: {
    title: "Software Engineer",
    company: "Company",
  },
  details: function () {
    console.log(
      "My address is at",
      this.address.street +
        ", " +
        this.address.city +
        ", " +
        this.address.country +
        " and works as a " +
        this.job.title +
        " at " +
        this.job.company
    );
  },
};

person.details();

//5
var people = [
  { fname: "Ahmed", age: 20 },
  { fname: "Ali", age: 30 },
  { fname: "Mohamed", age: 25 },
];

people.sort(function (a, b) {
  return a.age - b.age;
});

console.log(people);

//6
var numbers = [10, 5, 4, 60, 34, 56, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log("minimum number is: ", numbers[0]);
console.log("maximum number is: ", numbers[numbers.length - 1]);

//7
function reverseArray(arr) {
  let reversed = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

//8
function addDiscountPriceProperty(products) {
  for (var element of products) {
    element.discountedPrice = element.price * 0.9;
  }
  return products;
}

var manipulatedProducts = addDiscountPriceProperty([
  { name: "Product 1", price: 100 },
  { name: "Product 2", price: 200 },
  { name: "Product 3", price: 300 },
]);
console.log(manipulatedProducts);

//9
function getDayOfDate(date) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayIndex = new Date(date).getDay();
  return days[dayIndex];
}

console.log(getDayOfDate("2025-7-24"));

//10
function mergeUserNumbersWithoutDuplicates() {
  var numbers1 = prompt("Enter numbers separated by commas like: 1,6,5,9,1,2");

  var numbers2 = prompt("Enter numbers separated by commas like: 5,6,3,1,9");

  var numbers1Array = numbers1.split(",");
  var numbers2Array = numbers2.split(",");
  var mergedNumbers = numbers1Array.concat(numbers2Array);
  var uniqueNumbers = [];
  for (var i = 0; i < mergedNumbers.length; i++) {
    if (!uniqueNumbers.includes(mergedNumbers[i])) {
      uniqueNumbers.push(mergedNumbers[i]);
    }
  }

  alert("Your numbers are: " + uniqueNumbers);
}

mergeUserNumbersWithoutDuplicates();

//11
function usePhoneBook() {
  var contacts = [];
  var operation;
  do {
    var operation = prompt("Enter what you want to do: (add, search)");
    if (!operation) {
      break;
    }
    if (operation === "add") {
      var name;
      var phone;
      do {
        name = prompt("Enter the name:");
      } while (!name);

      do {
        phone = prompt("Enter the phone number:");
      } while (!phone);
      contacts.push({ name: name, phoneNumber: phone });
    } else if (operation === "search") {
      var foundContacts = [];
      var searchTerm = prompt("Enter the name or phone number to search:");

      for (const element of contacts) {
        if (element.name === searchTerm || element.phoneNumber === searchTerm) {
          foundContacts.push(element.name + ": " + element.phoneNumber);
        }
      }
      if (foundContacts.length === 0) {
        alert("No contacts found.");
      } else {
        alert("Found contacts: " + foundContacts.join("\n"));
      }
    }
  } while (operation);
}

usePhoneBook();

//12
function mergeTwoObjects(obj1, obj2) {
  var mergedObjects = {};
  for (var key in obj1) {
    mergedObjects[key] = obj1[key];
  }

  for (var key in obj2) {
    if (mergedObjects[key] === undefined) {
      mergedObjects[key] = obj2[key];
    } else {
      mergedObjects[key + "_1"] = obj2[key];
    }
  }
  console.log(mergedObjects);
}

var obj1 = { a: 1, b: 2, c: 3 };
var obj2 = { d: 4, c: 5, f: 6 };
mergeTwoObjects(obj1, obj2);
