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



// script lista mercado




    // card 1
    const lista = document.getElementById('lista');
    const produtos = document.getElementsByClassName('produto');
  
    function moverProdutos() {
      const primeiroProduto = lista.firstElementChild;
      lista.appendChild(primeiroProduto);
    }
  
    setInterval(moverProdutos, 2000);
  
    // card 2
    const lista2 = document.getElementById('lista2');
    const produtos2 = document.getElementsByClassName('produto2');
  
    function moverProdutos2() {
      const primeiroProduto2 = lista2.firstElementChild;
      lista2.appendChild(primeiroProduto2);
    }
  
    setInterval(moverProdutos2, 2000);
  
    // card 3
    const lista3 = document.getElementById('lista3');
    const produtos3 = document.getElementsByClassName('produto3');
  
    function moverProdutos3() {
      const primeiroProduto3 = lista3.firstElementChild;
      lista3.appendChild(primeiroProduto3);
    }
  
    setInterval(moverProdutos3, 2000);


