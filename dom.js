// let element = document.getElementById("demo");
// element.innerText ="G+"
// console.log(element);


// let ele=document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// ele[0].innerText="Hello"


// let x=[...ele];
// x.map(element=>{
//     element.computedStyleMap.backgroudColor="orange"
// })

// let ele=decodeURIComponent.createElement("h1");
// ele.innerText="Dynamic creation of html element";
// ele.id="demo";

// let image=document.createElement("img");
// image src= ""
// console.log(image);

// document.body.appendChild(ele);
// document.body.appendChild(image)


let form = document.querySelector("form");
let username=document.getElementById("uName");
let mail=document.getElementById("uMail");
let psw=document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    let name=username.ariaValueMax;
    let uemail=mail.value;
    let upass=psw.value;
    let userDetails ={
        uname,uemail,upass
    }
    console.log(userDetails);
    localStorage.setItem("userData" , JSON.stringify(userDetails))
})