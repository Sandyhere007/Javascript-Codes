// Special Things
// Concat 
// document.body.innerHTML 



let html="<h1>these is a html document</h1>";
console.log(html)
let name="Sandy";
console.log(name);

console.log(html.length) // shows the length of the stringth or in other words the characters present in the string
console.log(html.toUpperCase(html)) // changes to uppercase
console.log(html.toLowerCase(html)) // changes to lowercase

// concat is used to concatenate two or more strings
html1=html.concat("this", name)
console.log(html1)

console.log(html[0]) // simply returns the character at that index provided
console.log(html.indexOf("h1")) // shows the first index of the string character provided
console.log(html.lastIndexOf("h1")) // shows the last index of the string character provided
console.log(html.charAt(3)) //returns character at the given index
console.log(html.endsWith("9")) //returns that your string  ends up with the guven character or not
console.log(html.includes("h1")) //to confirm that is the given character is included or present in the string
console.log(html.substring(1,5)) //it returns the characters which are from the given starting index to the ending index it dosn't allow negative index
console.log(html.slice(1,-12)) //it returns the characters which are from the given starting index to the ending index it allows negative index
console.log(html.split(" ")) // it split string into substring and return them in form of array
console.log(html.replace("h1","h2")) //replaces the searchvalue of the string to a replace value in the string

myHtml=`Hello ${name}
    <h1> I am raj</h1>
    <p> here is a html code ${html} </p>
`;
document.body.innerHTML=myHtml;