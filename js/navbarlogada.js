const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});




document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.parentElement.classList.add("active");
        }
    });
});


const caixa = document.querySelector(".caixaMenu");



const ligarEDesligarDiv = function(){
    

    caixa.style.display === "flex" ? caixa.style.display = "none": caixa.style.display = "flex";

    document.getElementById("figaraaa").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAterior;
    imgAterior = aux;

};

var imgAtual = "img/menuFechar.png";
var imgAterior = "img/menuAbrir.png";

