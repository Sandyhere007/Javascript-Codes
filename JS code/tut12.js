


console.log("Welcome to The Console")

let a = document.all;

// element = document.getElementById("logo")

// element = element.childNodes; // shows the child nodes of a note
// element = element.parentNode; // shows the parent node of the node

// element = element.style.color="Blue";
// element = element.innerText //  shows only inner text not tags
// element = element.innerHTML // shows the whole html code of the element as a text
// element = element.querySelector(""); // query selector fetches out the entered tags first element it should be written between ""



// Multi element Selectors

// element = document.getElementsByClassName("container")
// element = document.getElementsByTagName("div")
// Array.from(a).forEach(function(elements) {
//     console.log(elements)
// });


for (let i = 0; i < a.length; i++) {
    const element = a[i];
    console.log(element)
}
