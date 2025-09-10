import { Employee, Manager, WorkBee, SalesPerson, Engineer } from "./task.js";

const employee = new Employee("Ahmed Mohamed", "IT");
const manager = new Manager("Ali Ahmed", "HR", [employee]);
const workBee = new WorkBee("Gamal Elsaid", "Marketing", [
  "project1",
  "project2",
]);
const salesPerson = new SalesPerson(
  "Alaa Shehata",
  ["project3", "project4"],
  200
);
const engineer = new Engineer("kareem Amr", ["project5", "project6"], "Screws");
