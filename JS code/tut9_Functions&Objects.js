// Special Things
// forEach 


console.log("Welcome to the console");

// we define a function by writing function name(parameters) where we assigs a name and more then one parameters 
// we can call the function using its name along with the parameters we want to be shown 
// remember: we can also give default value to any parameter in order to not be shown undefined 

// syntax for functions
// 1. use function and return a value and directly call it by its name and passing parameters
// 2.create a function and use return, store the whole value in a variable and use variable to log your result
// 3.put your function itselt inside a variable and call that function and use variable to log your result 


// 1. Type first


// function greet(name, thank="Thanks a lot") {
//     console.log(`Hey ${name} Good Morning wish You should have a better experience here.. ${thank}`)
// }
// greet("sandeep")



//  2. Type Second 


// function greet(name, thank="Thanks a lot") {
//      msg =`Hey ${name} Good Morning wish You should have a better experience here.. ${thank}`
//     return msg;
// }
// // greet("sandeep")

// let val = greet("sandeep", "Thanks");
// console.log(val);



// 3. Type Third

// const myGreet = function greet(name, thank= "Thanks You a lot") {
//     console.log(`Hey ${name} Good Morning wish You should have a better experience here.. ${thank}`)
// }
// myGreet("Sandeep")



// we can also use funtion inside of an object 

// const myObj = {
//     status : "King",
//     name : function greet(){
//         return `Good Morning`
//     }
// }
// console.log(myObj.name());


// use of foreach function for Array
// foreach is a function of array which gives the elements index and many different parameters of array




arr=["Sandy","Raj","King","Sandeep"]

arr.forEach(function(elements, index) {
    console.log(elements, index)
});

// let and const has block level scope 
// var has function level scope  