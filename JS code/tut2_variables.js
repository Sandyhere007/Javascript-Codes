// Special Things
// arra.push 


// var is a old ,ethod used to define a veriale

var name="Raj";
var whatever;
whatever="King";
console.log(name);

// typeof is used to show the data type of the variable
console.log( typeof whatever);

// const is used for constant variables whose values cannot be changed lATER
const number=12;
console.log(number);

// const can partially change as if we use a array we can append any value in it 
const arra=[12,34,64,12,76]
arra.push(24)
console.log(arra)


var city="Delhi";
// let is used between{} it only creates variable which can be shown in the same {} using console log 
{
    let city="mandsaur"
    console.log(city)
}
console.log(city)

//  if same variabl name is associated with two variables one outside the brackets as var and one inside the bracket as let both should be differently called no variable value will mess with ahother