class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }

  getDetails() {
    return `Name: ${this.name}, Subject: ${this.subject}`;
  }
}

class TeacherDecorator {
  constructor(teacher) {
    this.teacher = teacher;
  }

  getDetails() {
    return this.teacher.getDetails();
  }
}

class SalaryDecorator extends TeacherDecorator {
  constructor(teacher, salary) {
    super(teacher);
    this.salary = salary;
  }

  getDetails() {
    return `${super.getDetails()}, Salary: ${this.salary}`;
  }
}

class NationalityDecorator extends TeacherDecorator {
  constructor(teacher, nationality) {
    super(teacher);
    this.nationality = nationality;
  }

  getDetails() {
    return `${super.getDetails()}, Nationality: ${this.nationality}`;
  }
}

class StreetDecorator extends TeacherDecorator {
  constructor(teacher, street) {
    super(teacher);
    this.street = street;
  }

  getDetails() {
    return `${super.getDetails()}, Street: ${this.street}`;
  }
}

let teacher = new Teacher("Mr. Ahmed", "Math");

teacher = new SalaryDecorator(teacher, 15000);
teacher = new NationalityDecorator(teacher, "Egyptian");
teacher = new StreetDecorator(teacher, "Tahrir Street");

console.log(teacher.getDetails());
