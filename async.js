// console.log(10);
// console.log(20);
// console.log(30);
// console.log(40);
// console.log(50); 

//! javascript has an interpreter which executs the code line by line

//? setTimeout()

// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.l0g(30);
// })
// console.log(40);
// console.log(50); 


//? setInterval()

// console.log(10);
// console.log(20);
// setInterval(()=>{
//     console.l0g(30);
// })
// console.log(40);
// console.log(50); 

//! promise

// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

let p2 = new Promise((resolve , reject)=>{
    resolve("success");
})
// console.log(p2);
// p2
// .then((response)=>console.log(response))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("finally for both"))

let p3 = new Promise((resolve , reject)=>{
    reject("Failure");
});
// console.log(p3);
p3
.then(data=>console.log(data))
.catch(err=>console.log(err))
.finally(()=>console.log("finally for both"))