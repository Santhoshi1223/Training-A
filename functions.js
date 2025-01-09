//! function without parameters

// function demo(){
//     console.log("function without parameters")
// }
// demo()


//! anonymous function

// function(){
//     console.log("Anonymus function");
// }
// ();


//! function expression

// let x= function(){
//     console.log("function expression is executing");
// }
// x();


//! IIFE

// (function(){
//     console.log("IIFE");
// })();


//! arrow function

// function demo() {
//     console.log("Hello");
// }
// demo();


// let x =_=>console.log("Arrow function");
// x();


// let x=_=>console.log("Arrow function");
// x();      //! output: Arrow function


// let x=a=>console.log(a);
// x(5);     //! OUTPUT: 5


// let x=(a,b)=>console.group(a+b);
// x(5,5);    //! output: 10


let x=_=>{ console.log("Hi");
        console.log("Hello");
        console.log("Bye");}
        x();


