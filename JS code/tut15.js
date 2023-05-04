console.log("welcome to the Console")

// here we are gping to talk about evnets which occur on any webpage

// 1.simply grab an element from the document and Then 
// 2. (click, function(){
   // console.log("You have successfullly clicked ")
// });

// document.getElementById("mainmenu").addEventListener('click', function () {
   // console.log("Successfully CLICKED")
// });




// document.getElementById("mainmenu").addEventListener('click',function() {
  
// });


document.getElementById("mainmenu").addEventListener('click', function(e) {
   //  location.href = "https://google.com"
   let variable ;
   variable= e.target;
   variable= e.className;
   console.log(variable)
})

