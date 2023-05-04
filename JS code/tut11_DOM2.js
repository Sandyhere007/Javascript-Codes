console.log("Welcome to console");

let a = document;
a = document.all;
// a = document.body; // shows all of the body 
// a = document.forms; // we can use indexing here in order to find our requirerd form 
// Array.from(a).forEach(function(element) {
// console.log(element);
// })
// a = document.links[1].href //to see the links  
// Remember if your link is empty only then these will show th link of the webpage

// a = document.images;
// Array.from(a).forEach(function(element){
//     console.log(element)
// })

a = document.scripts;
Array.from(a).forEach(function(element){
    console.log(element)
})
// console.log(a);


// console.log(a);
// // Array(a).forEach(function(element) {
// //     console.log(element);
// // });
// // Array(a).toString(function(element)
// //  {
// // })/

// // a = document.body;
// // a = document.forms;
// a = document.links[0];
// a = document.images;
// a = document.scripts;
// console.log(a);