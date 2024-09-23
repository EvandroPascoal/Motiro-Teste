
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var myDiv = document.getElementById('myDiv');
    var listaCompra = document.querySelector('.listacompra');
  
    toggleButton.addEventListener('click', function () {
      myDiv.classList.toggle('visibleeDiv');
      listaCompra.classList.toggle('borderRadiusZero');
    });
  });
  




document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box8 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box8 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contPantera #adicionar222');
    var subtrair222Btn = document.querySelector('#contPantera #subtrair222');
    var contadorElement = document.querySelector('#box8 #contadorrr');
    var contadorrr2 = document.querySelector('#contPantera #contadorrr2');
    var menosMaisDiv = document.querySelector('#box8 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozPanteraDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box1 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box1 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCamil #adicionar222');
    var subtrair222Btn = document.querySelector('#contCamil #subtrair222');
    var contadorElement = document.querySelector('#box1 #contadorrr');
    var contadorrr2 = document.querySelector('#contCamil #contadorrr2');
    var menosMaisDiv = document.querySelector('#box1 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozCamilDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box2 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box2 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contTioJoao #adicionar222');
    var subtrair222Btn = document.querySelector('#contTioJoao #subtrair222');
    var contadorElement = document.querySelector('#box2 #contadorrr');
    var contadorrr2 = document.querySelector('#contTioJoao #contadorrr2');
    var menosMaisDiv = document.querySelector('#box2 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozTioJoaoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contPratoFino #adicionar222');
    var subtrair222Btn = document.querySelector('#contPratoFino #subtrair222');
    var contadorElement = document.querySelector('#box3 #contadorrr');
    var contadorrr2 = document.querySelector('#contPratoFino #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozPratoFinoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contSolito #adicionar222');
    var subtrair222Btn = document.querySelector('#contSolito #subtrair222');
    var contadorElement = document.querySelector('#box4 #contadorrr');
    var contadorrr2 = document.querySelector('#contSolito #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozSolitoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCamil2 #adicionar222');
    var subtrair222Btn = document.querySelector('#contCamil2 #subtrair222');
    var contadorElement = document.querySelector('#box5 #contadorrr');
    var contadorrr2 = document.querySelector('#contCamil2 #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozCamil2Div');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box6 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box6 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contSolito2 #adicionar222');
    var subtrair222Btn = document.querySelector('#contSolito2 #subtrair222');
    var contadorElement = document.querySelector('#box6 #contadorrr');
    var contadorrr2 = document.querySelector('#contSolito2 #contadorrr2');
    var menosMaisDiv = document.querySelector('#box6 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozSolito2Div');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});






  document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box7 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box7 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contPratoFino2 #adicionar222');
    var subtrair222Btn = document.querySelector('#contPratoFino2 #subtrair222');
    var contadorElement = document.querySelector('#box7 #contadorrr');
    var contadorrr2 = document.querySelector('#contPratoFino2 #contadorrr2');
    var menosMaisDiv = document.querySelector('#box7 .menosMais');
    var arrozPanteraDiv = document.getElementById('arrozPratoFino2Div');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});








  document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box9 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box9 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCarioca #adicionar222');
    var subtrair222Btn = document.querySelector('#contCarioca #subtrair222');
    var contadorElement = document.querySelector('#box9 #contadorrr');
    var contadorrr2 = document.querySelector('#contCarioca #contadorrr2');
    var menosMaisDiv = document.querySelector('#box9 .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoCariocaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

// ============================





document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box10 .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box10 .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contFeijaoKicaldo #adicionar222');
    var subtrair222Btn = document.querySelector('#contFeijaoKicaldo #subtrair222');
    var contadorElement = document.querySelector('#box10 #contadorrr');
    var contadorrr2 = document.querySelector('#contFeijaoKicaldo #contadorrr2');
    var menosMaisDiv = document.querySelector('#box10 .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoKicaldoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3-feijao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3-feijao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contFeijaoEstrela #adicionar222');
    var subtrair222Btn = document.querySelector('#contFeijaoEstrela #subtrair222');
    var contadorElement = document.querySelector('#box3-feijao  #contadorrr');
    var contadorrr2 = document.querySelector('#contFeijaoEstrela #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3-feijao  .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoEstrelaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4-feijao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4-feijao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contFeijaoMaaximo #adicionar222');
    var subtrair222Btn = document.querySelector('#contFeijaoMaaximo #subtrair222');
    var contadorElement = document.querySelector('#box4-feijao  #contadorrr');
    var contadorrr2 = document.querySelector('#contFeijaoMaaximo #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4-feijao  .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoMaximoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5-feijao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5-feijao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contFeijaoPantera #adicionar222');
    var subtrair222Btn = document.querySelector('#contFeijaoPantera #subtrair222');
    var contadorElement = document.querySelector('#box5-feijao  #contadorrr');
    var contadorrr2 = document.querySelector('#contFeijaoPantera #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5-feijao  .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoPanteraDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box6-feijao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box6-feijao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contFeijaoSolito #adicionar222');
    var subtrair222Btn = document.querySelector('#contFeijaoSolito #subtrair222');
    var contadorElement = document.querySelector('#box6-feijao  #contadorrr');
    var contadorrr2 = document.querySelector('#contFeijaoSolito #contadorrr2');
    var menosMaisDiv = document.querySelector('#box6-feijao  .menosMais');
    var arrozPanteraDiv = document.getElementById('feijaoSolitoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


// ================================LEITE=============================================

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box1-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box1-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeiteItalac #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeiteItalac #subtrair222');
    var contadorElement = document.querySelector('#box1-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeiteItalac #contadorrr2');
    var menosMaisDiv = document.querySelector('#box1-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leiteItalacDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeiteItambe #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeiteItambe #subtrair222');
    var contadorElement = document.querySelector('#box3-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeiteItambe #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leiteItambeDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeiteParmalat #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeiteParmalat #subtrair222');
    var contadorElement = document.querySelector('#box4-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeiteParmalat #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leiteParmalatDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box6-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box6-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeiteJussara #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeiteJussara #subtrair222');
    var contadorElement = document.querySelector('#box6-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeiteJussara #contadorrr2');
    var menosMaisDiv = document.querySelector('#box6-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leiteJussaraDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeitePiracanjuba #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeitePiracanjuba #subtrair222');
    var contadorElement = document.querySelector('#box5-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeitePiracanjuba #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leitePiracanjubaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box2-leite .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box2-leite  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contLeiteAurora #adicionar222');
    var subtrair222Btn = document.querySelector('#contLeiteAurora #subtrair222');
    var contadorElement = document.querySelector('#box2-leite  #contadorrr');
    var contadorrr2 = document.querySelector('#contLeiteAurora #contadorrr2');
    var menosMaisDiv = document.querySelector('#box2-leite .menosMais');
    var arrozPanteraDiv = document.getElementById('leiteAuroraDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


// ======================================AÇUCAR========================================================



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box1-acucar .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box1-acucar  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contAcucarDaBarra #adicionar222');
    var subtrair222Btn = document.querySelector('#contAcucarDaBarra #subtrair222');
    var contadorElement = document.querySelector('#box1-acucar  #contadorrr');
    var contadorrr2 = document.querySelector('#contAcucarDaBarra #contadorrr2');
    var menosMaisDiv = document.querySelector('#box1-acucar .menosMais');
    var arrozPanteraDiv = document.getElementById('acucarDaBarraDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box2-acucar .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box2-acucar  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contAcucarCaravelas #adicionar222');
    var subtrair222Btn = document.querySelector('#contAcucarCaravelas #subtrair222');
    var contadorElement = document.querySelector('#box2-acucar  #contadorrr');
    var contadorrr2 = document.querySelector('#contAcucarCaravelas #contadorrr2');
    var menosMaisDiv = document.querySelector('#box2-acucar .menosMais');
    var arrozPanteraDiv = document.getElementById('acucarCaravelasDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3-acucar .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3-acucar  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contAcucarGuarani #adicionar222');
    var subtrair222Btn = document.querySelector('#contAcucarGuarani #subtrair222');
    var contadorElement = document.querySelector('#box3-acucar  #contadorrr');
    var contadorrr2 = document.querySelector('#contAcucarGuarani #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3-acucar .menosMais');
    var arrozPanteraDiv = document.getElementById('acucarGuaraniDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4-acucar .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4-acucar  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contAcucarUniao #adicionar222');
    var subtrair222Btn = document.querySelector('#contAcucarUniao #subtrair222');
    var contadorElement = document.querySelector('#box4-acucar  #contadorrr');
    var contadorrr2 = document.querySelector('#contAcucarUniao #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4-acucar .menosMais');
    var arrozPanteraDiv = document.getElementById('acucarUniaoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5-acucar .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5-acucar  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contAcucarGlobo #adicionar222');
    var subtrair222Btn = document.querySelector('#contAcucarGlobo #subtrair222');
    var contadorElement = document.querySelector('#box5-acucar  #contadorrr');
    var contadorrr2 = document.querySelector('#contAcucarGlobo #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5-acucar .menosMais');
    var arrozPanteraDiv = document.getElementById('acucarGloboDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



// ===============================CAFÉ===========================

document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box1-cafe .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box1-cafe  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCafePilao #adicionar222');
    var subtrair222Btn = document.querySelector('#contCafePilao #subtrair222');
    var contadorElement = document.querySelector('#box1-cafe  #contadorrr');
    var contadorrr2 = document.querySelector('#contCafePilao #contadorrr2');
    var menosMaisDiv = document.querySelector('#box1-cafe .menosMais');
    var arrozPanteraDiv = document.getElementById('cafePilaoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box2-cafe .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box2-cafe  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCafe3coracoes #adicionar222');
    var subtrair222Btn = document.querySelector('#contCafe3coracoes #subtrair222');
    var contadorElement = document.querySelector('#box2-cafe  #contadorrr');
    var contadorrr2 = document.querySelector('#contCafe3coracoes #contadorrr2');
    var menosMaisDiv = document.querySelector('#box2-cafe .menosMais');
    var arrozPanteraDiv = document.getElementById('cafe3coracoesDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3-cafe .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3-cafe  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCafeMelitta #adicionar222');
    var subtrair222Btn = document.querySelector('#contCafeMelitta #subtrair222');
    var contadorElement = document.querySelector('#box3-cafe  #contadorrr');
    var contadorrr2 = document.querySelector('#contCafeMelitta #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3-cafe .menosMais');
    var arrozPanteraDiv = document.getElementById('cafeMelittaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4-cafe .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4-cafe  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCafeCabloco #adicionar222');
    var subtrair222Btn = document.querySelector('#contCafeCabloco #subtrair222');
    var contadorElement = document.querySelector('#box4-cafe  #contadorrr');
    var contadorrr2 = document.querySelector('#contCafeCabloco #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4-cafe .menosMais');
    var arrozPanteraDiv = document.getElementById('cafeCablocoDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5-cafe .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5-cafe  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contCafeBrasileiro #adicionar222');
    var subtrair222Btn = document.querySelector('#contCafeBrasileiro #subtrair222');
    var contadorElement = document.querySelector('#box5-cafe  #contadorrr');
    var contadorrr2 = document.querySelector('#contCafeBrasileiro #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5-cafe .menosMais');
    var arrozPanteraDiv = document.getElementById('cafeBrasileiroDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});



// =======================================Macarrão=========================================



document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box1-macarrao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box1-macarrao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contMacarraoAdria #adicionar222');
    var subtrair222Btn = document.querySelector('#contMacarraoAdria #subtrair222');
    var contadorElement = document.querySelector('#box1-macarrao  #contadorrr');
    var contadorrr2 = document.querySelector('#contMacarraoAdria #contadorrr2');
    var menosMaisDiv = document.querySelector('#box1-macarrao .menosMais');
    var arrozPanteraDiv = document.getElementById('macarraoAdriaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box2-macarrao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box2-macarrao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contMacarraoBarilla #adicionar222');
    var subtrair222Btn = document.querySelector('#contMacarraoBarilla #subtrair222');
    var contadorElement = document.querySelector('#box2-macarrao  #contadorrr');
    var contadorrr2 = document.querySelector('#contMacarraoBarilla #contadorrr2');
    var menosMaisDiv = document.querySelector('#box2-macarrao .menosMais');
    var arrozPanteraDiv = document.getElementById('macarraoBarillaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});








document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box3-macarrao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box3-macarrao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contMacarraoDonaBenta #adicionar222');
    var subtrair222Btn = document.querySelector('#contMacarraoDonaBenta #subtrair222');
    var contadorElement = document.querySelector('#box3-macarrao  #contadorrr');
    var contadorrr2 = document.querySelector('#contMacarraoDonaBenta #contadorrr2');
    var menosMaisDiv = document.querySelector('#box3-macarrao .menosMais');
    var arrozPanteraDiv = document.getElementById('macarraoDonaBetaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});









document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box4-macarrao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box4-macarrao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contMacarraoPetybon #adicionar222');
    var subtrair222Btn = document.querySelector('#contMacarraoPetybon #subtrair222');
    var contadorElement = document.querySelector('#box4-macarrao  #contadorrr');
    var contadorrr2 = document.querySelector('#contMacarraoPetybon #contadorrr2');
    var menosMaisDiv = document.querySelector('#box4-macarrao .menosMais');
    var arrozPanteraDiv = document.getElementById('macarraoPetybonDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    var arrozPanteraBtn = document.querySelector('#box5-macarrao .fa-solid.fa-plus');
    var subtrairBtn = document.querySelector('#box5-macarrao  .fa-solid.fa-minus');
    var adicionar222Btn = document.querySelector('#contMacarraoVitarella #adicionar222');
    var subtrair222Btn = document.querySelector('#contMacarraoVitarella #subtrair222');
    var contadorElement = document.querySelector('#box5-macarrao  #contadorrr');
    var contadorrr2 = document.querySelector('#contMacarraoVitarella #contadorrr2');
    var menosMaisDiv = document.querySelector('#box5-macarrao .menosMais');
    var arrozPanteraDiv = document.getElementById('macarraoVitarellaDiv');
    var contador = 0;

    function atualizarContador() {
        contadorElement.textContent = contador;
        contadorrr2.textContent = contador;

        
        // Se o contador for zero, oculta a div .menosMais e #arrozPanteraDiv
        if (contador === 0) {
            menosMaisDiv.style.display = 'none';
            arrozPanteraDiv.classList.remove('visibleDiv');
        } else {
            menosMaisDiv.style.display = 'flex';
            arrozPanteraDiv.classList.add('visibleDiv');
        }
    }

    if (arrozPanteraBtn && subtrairBtn && adicionar222Btn && subtrair222Btn && contadorElement && menosMaisDiv) {
        arrozPanteraBtn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrairBtn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });

        adicionar222Btn.addEventListener('click', function() {
            // Aumenta o contador e atualiza
            contador++;
            atualizarContador();
        });

        subtrair222Btn.addEventListener('click', function() {
            // Diminui o contador, mas não abaixo de zero
            contador = Math.max(0, contador - 1);
            atualizarContador();
        });
    }
});















// ===========================================================================

document.addEventListener('DOMContentLoaded', function () {
    // ... Seu código existente ...

    // Adicione o seguinte trecho para calcular o total e exibi-lo
    var todosContadores = document.querySelectorAll('#contadorrr');
    var totalItensDaLista = document.getElementById('totalItensDaLista');

    function atualizarTotal() {
        var total = 0;

        todosContadores.forEach(function (contador) {
            total += parseInt(contador.textContent);
        });

        totalItensDaLista.textContent = total;
    }

    atualizarTotal();  // Atualiza o total inicial

    // Adicione os seguintes eventos aos botões existentes para chamar a função de atualização
    var todosBotoes = document.querySelectorAll('#adicionar, #adicionar222, #subtrair , #subtrair222');

    todosBotoes.forEach(function (botao) {
        botao.addEventListener('click', function () {
            atualizarTotal();
        });
    });

     // Adicione o seguinte trecho para calcular o total e exibi-lo
     var todosContadores = document.querySelectorAll('#contadorrr');
     var totalItensDaLista = document.getElementById('circuloQuantidade');
 
     function atualizarTotal() {
         var total = 0;
 
         todosContadores.forEach(function (contador) {
             total += parseInt(contador.textContent);
         });
 
         totalItensDaLista.textContent = total;
 
         // Adiciona ou remove a classe 'esconder' com base no valor do total
         totalItensDaLista.classList.toggle('esconder', total <= 0);
     }
 
     atualizarTotal();  // Atualiza o total inicial
 
     // Adicione os seguintes eventos aos botões existentes para chamar a função de atualização
     var todosBotoes = document.querySelectorAll('#adicionar, #adicionar222, #subtrair , #subtrair222');
 
     todosBotoes.forEach(function (botao) {
         botao.addEventListener('click', function () {
             atualizarTotal();
         });
     });


});

document.addEventListener('DOMContentLoaded', function () {
    // Função para calcular e exibir o preço total
    function calcularPrecoTotal() {
      var todosItensDaLista = document.querySelectorAll('.itensDaLista');
      var totalItensDaLista = document.getElementById('precoTotaldaLista');
  
      var total = 0;
  
      todosItensDaLista.forEach(function (item) {
        var precoUnitario = parseFloat(item.querySelector('.precoSomarParaTotal').textContent.replace('R$ ', '').replace(',', '.').replace(' un.', ''));
        var quantidade = parseInt(item.querySelector('#contadorrr2').textContent);
        total += precoUnitario * quantidade;
      });
  
      totalItensDaLista.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
    }
  
    // Adiciona os seguintes eventos aos botões existentes para chamar a função de atualização
    var todosBotoes = document.querySelectorAll('#adicionar, #adicionar222, #subtrair, #subtrair222');
  
    todosBotoes.forEach(function (botao) {
      botao.addEventListener('click', function () {
        calcularPrecoTotal();  // Atualiza o preço total sempre que houver alteração na quantidade
      });
    });
  });
  
