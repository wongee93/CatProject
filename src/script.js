require('./style.css');

const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");

const cat1 = document.getElementById("cat1");
const cat2 = document.getElementById("cat2");
const cat3 = document.getElementById("cat3");

Btn1.addEventListener("click", function(){
    cat1.style.display = "block"
    cat2.style.display = "none"
    cat3.style.display = "none"
})

Btn2.addEventListener("click", function(){
    cat2.style.display = "block"
    cat1.style.display = "none"
    cat3.style.display = "none"
})

Btn3.addEventListener("click", function(){
    cat3.style.display = "block"
    cat2.style.display = "none"
    cat1.style.display = "none"
})