let h = document.querySelector("h1");

window.addEventListener("keydown",function(dets){
    if(dets.key === " "){
        h.innerText = "BSC"
    } else
    h.innerText = dets.key
})