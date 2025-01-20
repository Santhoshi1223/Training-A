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


// let x=_=>{ console.log("Hi");
//         console.log("Hello");
//         console.log("Bye");}
//         x();


//! return keyword (it terminates the execution and returns a value or variable and it is not a printing statement)

//! explicit return

// function demo(a,b){
//        return a+b;
// }
// let x=demo(5,5);
// console.log(x);  //! 10


//! implicit return

// let y=(a,b)=>a+b;
// let a=y(10,20);
// console.log(a);  //! 30

//! explicit return

// let z=(a,b)=>{return a+b};
// let b=z(10,100);
// console.log(b);  //! 110


//! Higher order function

// function hof(a){
//         return a;
// }
// let x = hof(function(){return "Hello i am a callback function"});
// console.log(x);  //! (){return "Hello i am a callback function"}

//! closure

// var a=100;
// let b="Hi";
// function x(){
//         var user="Santhoshi";
//         let company="Google";
//         const sal= 1234567890;
//         console.log(user);
//         console.log(company);
//         console.log(sal);
//         console.log(a,b);
// };
// x();

