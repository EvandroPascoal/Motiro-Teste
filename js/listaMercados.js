document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const listaAssaiAparecer = document.getElementById("listaAssaiAparecer");
    const listaMercadosSair = document.querySelector(".listaMercados-sair");
    const body = document.body;

    container.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "block";
        body.classList.add("no-scroll"); // Adiciona a classe para desativar o scroll
    });

    listaMercadosSair.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "none";
        body.classList.remove("no-scroll"); // Remove a classe para reativar o scroll
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container2");
    const listaAssaiAparecer = document.getElementById("listaAssaiAparecer2");
    const listaMercadosSair = document.querySelector(".listaMercados-sair2");
    const body = document.body;

    container.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "block";
        body.classList.add("no-scroll"); // Adiciona a classe para desativar o scroll
    });

    listaMercadosSair.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "none";
        body.classList.remove("no-scroll"); // Remove a classe para reativar o scroll
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container3");
    const listaAssaiAparecer = document.getElementById("listaAssaiAparecer3");
    const listaMercadosSair = document.querySelector(".listaMercados-sair3");
    const body = document.body;

    container.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "block";
        body.classList.add("no-scroll"); // Adiciona a classe para desativar o scroll
    });

    listaMercadosSair.addEventListener("click", function () {
        listaAssaiAparecer.style.display = "none";
        body.classList.remove("no-scroll"); // Remove a classe para reativar o scroll
    });
});