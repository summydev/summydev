let menu = document.querySelector(".menu");
let list = document.querySelector("header nav");

let body = document.querySelector("body")

menu.addEventListener ("click", function(){
    list.style.display = "block"
    
    body.style.background = "brown"
    list.style.transition = "all 0.5s ease-in-out"

})
 