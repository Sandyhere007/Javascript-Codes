// Special Things
// arr.length 
// date 
// toString 
// parseInt 
// Coersion

let car="114";
console.log(car, (typeof car));

// first method of type conversion
// we must use first letter of datatype capital in order to convert 
let money=Number("20");
console.log(money)  

let date=new Date();
console.log(date)


let arr=[2,4,25,5,1,"sandy"]
console.log(arr.length, (typeof arr));


// second method
let raj="112";
console.log(raj.toString , (typeof raj))  //.toString is used to convert a string into its string representation

// parseint is used to convert any string to a number
let no="123461";
console.log(no, parseInt(no));


// Type Coersion
// in type coersion two different datatypes are added 

let name="raj"

console.log(name +34)