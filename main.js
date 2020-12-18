
let menu = document.querySelector(".menu");
let list = document.querySelector("header nav");
let section = document.querySelector("section");
let body = document.querySelector("body")

menu.addEventListener ("click", function(){
    list.style.display = "block"
    section.style.marginTop = "90%"
    body.style.background = "brown"
    list.style.transition = "all0.5s ease-in-out"

})
 

 