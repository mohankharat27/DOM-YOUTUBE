let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");
let btn = document.querySelector("button");

a.addEventListener("click",()=>{
    console.log("a clicked")
},true);

b.addEventListener("click",()=>{
    console.log("b clicked")
});

c.addEventListener("click",()=>{
    console.log("c clicked")
},true);

btn.addEventListener("click",()=>{
    console.log("button clicked")
});