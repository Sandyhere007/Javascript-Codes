var name = "Name";

a= document.links;

Array.from(a).forEach(function(element){
    if( a.includes(name)) {
        console.log(a)
    }
    else {
        console.log("nothing")
    }
})
