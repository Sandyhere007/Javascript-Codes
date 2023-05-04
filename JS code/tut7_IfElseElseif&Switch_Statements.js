// Special Things
// ternary Operator 
// Switch Statement 

onsole.log("Welcome to the Console");

// if else if and else are used like these
const age = "130";

if (age < 18) {
  console.log("You are not Eligible to enter here");
}
// if we are using == no matter about data type but when we are using=== data type should also be same to ecexute the condition
else if (age === 18) {
  console.log("Enter here on your own risk");
} else if (age != 18) {
  console.log("gate lost");
} else {
  console.log("You can enter here");
}

// if we want to chech whether a variable is defined or not

if (typeof vari !== "undefined") {
  console.log("These variable is defined");
} else {
  console.log("These variable is not defined");
}

// && is used as and  and || is used as or operators

let car = "mj";
let sits = 4;

if (car == "mj" && sits == 5) {
  console.log("These is MJ hector");
} else {
  console.log("These is not MJ Hector");
}

if (car == "mj" || sits == 4) {
  console.log("These is mj hector");
} else {
  console.log("These is not MJ Hector");
}

// Ternary operator  give the condition use? first condition is for true and second is for false of the condition
console.log(age == 18 ? "You are eligible" : "You are not eligible");


// switch statement is used like these
// switch (age) {
//     case value:
//         console.log("bla.. bla.. bla..")
//         break;
//     default:
//         console.log("bla.. bla.. bla..")
//         break;}




switch (age) {
  case 18:
    console.log("The age is 18");
    break;
  case 28:
    console.log("The age is 28");
    break;
  case 38:
    console.log("The age is 38");
    break;
  case 48:
    console.log("The age is 48");
    break;
  case 58:
    console.log("The age is 58");
    break;
  case 68:
    console.log("The age is 68");
    break;
  case 78:
    console.log("The age is 78");
    break;
  case 88:
    console.log("The age is 88");
    break;
  case 98:
    console.log("The age is 98");
    break;
  default:
    console.log("You are an allien");
    break;
}
