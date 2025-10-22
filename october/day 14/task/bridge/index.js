const Remote = require("./Remote");
const Speaker = require("./Speaker");
const TV = require("./Tv");

const tv = new TV();
const speaker = new Speaker();

const remote1 = new Remote(tv);

console.log("=== Using Remote for TV ===");
remote1.increase();
remote1.decrease();

const remote2 = new Remote(speaker);

console.log("=== Using Remote for Speaker ===");
remote2.increase();
remote2.decrease();
