// console.log(window);
// console.log(document);

// let element = document.getElementById("demo");
// element.innerText = "G+"
// console.log(element);

//let ele = document.getElementById("test");
// ele.innerText= "<h1>Header</h1>"
//ele.innerHTML = "<h1>Header</h1>"
//console.log(ele);

/*let ele= document.getElementsByClassName("test");
console.log(ele);
console.log(Array.isArray(ele));
ele[0].innerTest="Hello"
//ele[0].style.backgroundColor="Tomato"

let x=[...ele];
x.map(element=>{
    element.style.backgroundColor="orange"
})*/

//let ele=document.getElementsByName("");
//console.log(ele);

//let ele1=document.querySelector("#mru");
//console.log(ele1);

//let ele2=document.querySelector(".test");
/*console.log(ele2);

let ele3=document.querySelectorAll(".test");
console.log(ele3);*/

//let ele = document.createElement("h1");
//ele.innerText = "Dynamic creation of  html element";
//ele.id = "demo";
//console.log(ele);

/*let image = document.createElement("img");
image.src = "./Screenshot 2025-01-23 130622 (1).png";
console.log(image);

document.body.appendChild(ele);
document.body.appendChild(image);*/

let form=document.querySelector("form");
let username=document.getElementById("uName");
let mail=document.getElementById("uMail");
let psw=document.getElementById("uPass");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let uname=username.value;
    let uemail=mail.value;
    let upass=psw.value;
    let userDetails={
        uname,uemail,upass
    }
    console.log(userDetails);
    localStorage.setItem("userData",JSON.stringify(userDetails))

})
