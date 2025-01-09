//! function without parameters
function demo(){
    console.log("function without parameters");
}
demo();

//! function with parameters
function userDetails(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);
    
}
userDetails("Bhavana",20,"Nizamabad");

//!Anonymous function
//function(){
 //   console.log("Anonymous function");
//}
//();

//!function expression
let x=function(){
    console.log("function expression")
}
x();

//IIFE
(function(){
    console.log("IIFE");
})();

//arrow function
//let y = _=> console.log("Arrow function");
//y();

let y=_=>{console.log("HI");
    console.log("Hello");
    console.log("Bye");
}
y();