// Special Things


console.log("welcome again");
let array=[12,45,32,65,"sandy"];
console.log(array);


// two things in arrays property and method
console.log(array.length); // length of the array

console.log(array.push(12)); // appends a value at the ending of the array
console.log(array)

console.log(array.unshift(21)); //appends a value at the starting of the array
console.log(array)

console.log(array.pop()); // removes the last value of the array
console.log(array)

console.log(array.shift()) // removes the  first value of the array
console.log(array)

console.log(array.splice(4,5)); //slice the array from the given staring to ending indev  ...REMEMBER it also takes off the value out of the initial array

console.log(array.reverse())// it reverses the array
let array1=[75,83,9];
console.log(array.concat(array1)) //it concates two or more different arrays
console.log(array1+array)
console.log(typeof (array1+array))//while using a + sign it adds two arrays and show them as a string




let myObj = {
    name : "sandy",
    status: "King",
    age : 18
}

// two methods to call data out of the object
// First Method
console.log(myObj.name)

// second Method
console.log(myObj["age"])