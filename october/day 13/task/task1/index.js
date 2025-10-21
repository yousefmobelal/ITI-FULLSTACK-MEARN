const ScienceStudentCreator = require("./creators/ScienceStudentCreator");
const ArtsStudentCreator = require("./creators/ArtsStudentCreator");
const CommerceStudentCreator = require("./creators/CommerceStudentCreator");

let c1 = new ScienceStudentCreator();
console.log(c1.getInfo());

let c2 = new ArtsStudentCreator();
console.log(c2.getInfo());

let c3 = new CommerceStudentCreator();
console.log(c3.getInfo());
