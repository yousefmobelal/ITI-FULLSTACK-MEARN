// 1
let name:String = "Yousef Mohamed";
let age:number = 24;
let isAdmin:boolean = true;
let hobbies:Array<String> = ["Reading", "Traveling", "Coding"];
console.log(`My name is ${name}, I'm ${age} years old${isAdmin? ", I am an admin": ""}, hobbies: ${hobbies.join(", ")}.`);

// 2
let array:(number | string)[] = [];

array.push(1);
array.push("Hello");
array.push(2);
array.push("World");


function printArrayElements(array: (number | string) []){
    for (const element of array) {
        console.log(`${element}, type: ${typeof element}`);
    }
}

printArrayElements(array);

// 3
enum TrafficLight{
    Red,
    Yellow,
    Green,
}

function getAction(light: TrafficLight): string {
    switch (light) {
        case TrafficLight.Red:
            return "Stop";
        case TrafficLight.Yellow:
            return "Get Ready";
        case TrafficLight.Green:
            return "Go";
        default:
            return "Invalid Traffic Light";
    }
}

console.log(getAction(TrafficLight.Red));
console.log(getAction(TrafficLight.Yellow));
console.log(getAction(TrafficLight.Green));


// 4

type User = [string, string, Role];
enum Role{
    Admin = "Admin", 
    User = "User", 
    Guest= "Guest",
}

function describeUser(userInfo: User): string {
    return `id: ${userInfo[0]}, name: ${userInfo[1]}, role: ${Role[userInfo[2]]}`;
}

let userInfo: User =["1", "Yousef", Role.Admin];

console.log(describeUser(userInfo));

// 5
function manipulateString(input:string):string;
function manipulateString(input:number):string;
function manipulateString(input:any):string{
    if (typeof input === "string") {
        return input.toUpperCase();
    }
   else {
        return `$${input}`;
    }

}

console.log(manipulateString("hello")); 
console.log(manipulateString(100));

//6
let x:unknown = "Hello World";

function processInput(input: unknown): string {
    if (typeof input === "string") {
       return `${input.toUpperCase()}`;
    } else if (typeof input === "number") {
       return `$${input**2}`;
    } 
    return `The input type is not supported, it should be a string or a number.`;
}

console.log(processInput(x));
console.log(processInput(10));
