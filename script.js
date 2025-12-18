let box = document.querySelector("div")

window.addEventListener("mousemove",function(dets){
    box.style.top = dets.clientY + "px";
    box.style.left = dets.clientX + "px"
});

