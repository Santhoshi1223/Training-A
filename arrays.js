// let users = ["Ramya", "Sai", "Ajju","Karthik","PawanKalyan"];
// let x=users.map((user)=>{
//     return user;
//     });
//     console.log(x);   //! o/p ['Ramya', 'Sai', 'Ajju', 'Karthik', 'PawanKalyan']



// let x=users.forEach((user)=>{
//     return user;
// });
// console.log(x);     //! o/p undefined


//! create array of objects and print the values

// let userDetails = {
//     name: "Santhoshi",
//     age: 20,
//     company: "Google",
//     sal : 1234567890,
//     details: function(){
//         return "My name is ${this.name} and I am working in ${this.company}"
//     }
// };
// console.log(userDetails);
// console.log(userDetails.name);
// console.log(userDetails.details());



//! create array of objects and print the values

let userDetails = [
    {
        name: "Ramya",
        city: "Guntur"
    },
    {
        name: "Lasya",
        city: "Karimnagar"
    },
    {
        name: "Arjun",
        city: "KPHB"
    },
    {
        name: "Sai",
        city: "Hyderabad"
    }
];

userDetails.map((x)=>{
    console.log(x.name);
})                           

//! o/p Ramya Lasya Arjun Sai



//! JSON

// let userDetails = {
//     name: "Sam",
//     age: 23,
//     city : "Hyd"
// };
// console.log(userDetails);

// let x = JSON.stringify(userDetails);
// console.log("JSON object "+x);

// let y = JSON.parse(x);
// console.log(y);