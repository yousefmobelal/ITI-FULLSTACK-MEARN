"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Employee {
    get username() {
        return this._username;
    }
    constructor(emp, address) {
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = address;
        Employee.employeeCount++;
    }
    static getInstanceCount() {
        return Employee.employeeCount;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}, Username: ${this.username}, Email: ${this.email}, Address: ${this.address.street}, ${this.address.city}`;
    }
}
Employee.employeeCount = 0;
const emp1GeoData = {
    lat: "-37.3159",
    lng: "81.1496",
};
const emp1Address = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipCode: "92998-3874",
    geo: emp1GeoData,
};
const emp1Data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
};
const emp1 = new Employee(emp1Data, emp1Address);
console.log(emp1.toString());
console.log(`Number of Employee instances: ${Employee.getInstanceCount()}`);
class Manager extends Employee {
    constructor(emp, address) {
        super(emp, address);
    }
    viewAddress() {
        console.log(this.address);
    }
}
const managerGeoData = {
    lat: "30.0444",
    lng: "31.2357",
};
const managerAddress = {
    street: "Tahrir Square",
    suite: "Office 502",
    city: "Cairo",
    zipCode: "11511",
    geo: managerGeoData,
};
const managerData = {
    id: 2,
    name: "Ahmed Mohmaed",
    username: "Ah_mo",
    email: "ahmed@gmail.com",
};
let manager = new Manager(managerData, managerAddress);
manager.viewAddress();
function classTimestamp(constructor) {
    console.log(`Created At: ${new Date().toISOString()}, Class: ${constructor.name}`);
}
let User = class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
};
User = __decorate([
    classTimestamp
], User);
let user1 = new User("Yousef Mohamed", 24, "yousefmobelal@gmail.com");
