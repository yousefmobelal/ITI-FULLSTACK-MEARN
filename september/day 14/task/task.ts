//! 1
interface IGeo {
  lat: string;
  lng: string;
}

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipCode: string;
  geo: IGeo;
}

interface IEmployee {
  //! a
  readonly id: number;
  name: string;
  email: string;
  username: string;
}

class Employee implements IEmployee {
  readonly id: number;
  name: string;
  //! b
  private _username: string;
  email: string;
  //! c
  protected address: IAddress;

  private static employeeCount: number = 0;

  get username(): string {
    return this._username;
  }

  constructor(emp: IEmployee, address: IAddress) {
    this.id = emp.id;
    this.name = emp.name;
    this._username = emp.username;
    this.email = emp.email;
    this.address = address;
    Employee.employeeCount++;
  }

  //! d
  static getInstanceCount(): number {
    return Employee.employeeCount;
  }
  toString(): string {
    return `ID: ${this.id}, Name: ${this.name}, Username: ${this.username}, Email: ${this.email}, Address: ${this.address.street}, ${this.address.city}`;
  }
}

const emp1GeoData: IGeo = {
  lat: "-37.3159",
  lng: "81.1496",
};

const emp1Address: IAddress = {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipCode: "92998-3874",
  geo: emp1GeoData,
};

const emp1Data: IEmployee = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
};

const emp1 = new Employee(emp1Data, emp1Address);

console.log(emp1.toString());
console.log(`Number of Employee instances: ${Employee.getInstanceCount()}`);

//! 2
class Manager extends Employee {
  constructor(emp: IEmployee, address: IAddress) {
    super(emp, address);
  }

  viewAddress(): void {
    console.log(this.address);
  }
}

const managerGeoData: IGeo = {
  lat: "30.0444",
  lng: "31.2357",
};

const managerAddress: IAddress = {
  street: "Tahrir Square",
  suite: "Office 502",
  city: "Cairo",
  zipCode: "11511",
  geo: managerGeoData,
};

const managerData: IEmployee = {
  id: 2,
  name: "Ahmed Mohmaed",
  username: "Ah_mo",
  email: "ahmed@gmail.com",
};

let manager = new Manager(managerData, managerAddress);
manager.viewAddress();

//! 3
function classTimestamp(constructor: Function) {
  console.log(
    `Class: ${constructor.name}, Created At: ${new Date().toISOString()}`
  );
}

@classTimestamp
class User {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

let user1 = new User("Yousef Mohamed", 24, "yousefmobelal@gmail.com");
