console.log("Welcome to the console")

// Traversing = go inside and inside

let cont = document.querySelector(".here")
// console.log(cont.parentNode);
// console.log(cont.childNodes)
// console.log(cont.children)
// console.log(cont)


// //Node Type list
// // 1 . Element 
// // 2 . Attribute
// // 3 . Text Node 
// // 8 . comment 
// // 9 document 
// // 10 . doctype 

// // NodeName  
// let nodeName = cont.children[0].nodeName;
// console.log(nodeName)

// // nodeType 
// let nodeType = cont.children[0].nodeType;
// console.log(nodeType)


// // Traversing into childrens of childrens of childrens

// console.log(cont.firstChild);
// console.log(cont.firstElementChild);
// console.log(cont.lastChild);
// console.log(cont.lastElementChild)
// console.log(cont.childElementCount) // Number of child elements

// console.log(cont.firstElementChild.parentNode);
// console.log(cont.firstElementChild.nextSibling);
// console.log(cont.firstElementChild.nextElementSibling);
// console.log(cont.firstElementChild.parentNode)


console.log(cont.children)
console.log(cont.children[0])
console.log(cont.children[1].children)
console.log(cont.children[1].children[1].children)

