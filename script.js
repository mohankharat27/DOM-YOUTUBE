let inp = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input",function(){
    let len =20 - inp.value.length;
    span.textContent = len;

    if(len < 0){
        span.style.color = "red";
    } else{
        span.style.color = "white"
    }
})