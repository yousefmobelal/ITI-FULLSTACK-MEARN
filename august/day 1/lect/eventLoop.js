console.log("Start"); // 1
console.log("1"); //2
function fun() {
  console.log("function exec start"); //6
  console.log("2"); //7
  setTimeout(function () {
    console.log("3"); //10
  }, 1000);
  console.log("function exec end"); //8
}
console.log("4"); //3

setTimeout(function () {
  console.log("5"); //11
}, 2000);
setTimeout(function () {
  console.log("6"); //9
}, 0);
console.log("7"); // 4
console.log("done"); // 5
fun();
