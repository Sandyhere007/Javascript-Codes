// Special Things
// Break 
// continue
// for(let key in obj) {
    // console.log(`The ${key} of User is ${obj[key]}`)



// console.log("Welcome to the console")
// //if  we can reach the admin panel and manipulate the website just use a for loop with a condition i=0:i=100;i++

// // General loops   for, while ,do while
// console.time("Your code took ")
// for(let i=11; i<1000; i++){
//     console.log(i);
// }
// console.timeEnd("Your code took ")


// let j=0;
// while (j<100) {
//     console.log(j);
//     j ++;
// }
    

// do while loop is used like firstly a variable is declared and then in { }statement are given after that in while a ore statement is given

// Remember in do while loop do is implemented once and after that while conditionn is checked
    // let k=0;
    // do{
    //     console.log(k + 1);
    //     k+=1;
    // } 
    // while(k<50)


//     let i=0;
//     do{   if(i===9){
//         break;
//     } 
//        console.log(i + 1);
//         i+=1;
     
// }
//     while(i<50)
//     console.log("done")

// continue statement is used in order to skip a value in it we use a if confdition and if the condition is true then the loop misses that value and contiue to implemet
// Remember if we don't give the condtion to proceed further the loop itself turns himself in infinite loop

    // let j=0;
    // do {        
    //         if (j===7){
    //         j++;
    //         continue;
    //     }
    //     console.log(j);
    //     j +=1;
    // } while (j<15);


    let arr=[12,57,97,84,3,5]
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element)
    }
// we cna take any parameter in place of element here like index arrray etc 

    // arr.forEach(function(element) {
    //     console.log(element)
    // }); 
let obj ={
    name:"sandy",
    status:"King",
    type:"Hacker",
    age:"18"
}

for(let key in obj) {
    console.log(`The ${key} of User is ${obj[key]}`)
}