console.log("welcome to the console")

// Creating an Element
// let name = document.createElement("a");
// name.className = "New";
// name.idName = "new id";
// name.setAttribute ("href", "https://www.google.com")
// name.innerText="I am The KING"
// console.log(name)

// // how to append element into the HTML 

// // let side = document.querySelector(".sidebar");
// // side.appendChild(name)



// // one more method  DOn't Know but much complicated i think
// let any = document.createElement("h1");
// let text = document.createTextNode("Here is The King ENTERS")
// any.appendChild(text)

// let div = document.querySelector("div.container");
// div.appendChild(any)




// Replacing element 

// name.replaceWith(any)

// element1.replaceWith(replaceableElement)

// second Method 
// let side = document.getElementsByClassName("side");
// side.replaceChild(any, document.getElementsByClassName("New"))
// console.log(side)


// Removing elements nodes attributes using javascript

// console.log(side.children)
// console.log(side.children[1].hasAttribute("href"))
// console.log(side.getElementsByClassName("new"))
// let elem =side.removeChild("a")
// console.log(elem)

// side.removeChild(document.getElementsByClassName("New"))


// // Quick Quiz
let heading = document.createElement("h1");
heading.className= "raj"
heading.innerText ="Raj is here";
console.log(heading);

let div = document.querySelector("li");
div.appendChild(heading);

let anchor = document.createElement('a');
any.setAttribute("href ", "https:/www.google.com");