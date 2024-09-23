$(function() {
    // Seu código JavaScript aqui
    $('#prev').on('click', function() {
      $('#cards').animate({
        scrollLeft: '-=500'
      }, 500, 'swing');
    });
  
    $('#next').on('click', function() {
      $('#cards').animate({
        scrollLeft: '+=500'
      }, 500, 'swing');
    });
  });
  
$(function() {
    // Seu código JavaScript aqui
    $('#prev-feijao').on('click', function() {
      $('#cards-feijao').animate({
        scrollLeft: '-=500'
      }, 500, 'swing');
    });
  
    $('#next-feijao').on('click', function() {
      $('#cards-feijao').animate({
        scrollLeft: '+=500'
      }, 500, 'swing');
    });
  });

$(function() {
    // Seu código JavaScript aqui
    $('#prev-acucar').on('click', function() {
      $('#cards-acucar').animate({
        scrollLeft: '-=500'
      }, 500, 'swing');
    });
  
    $('#next-acucar').on('click', function() {
      $('#cards-acucar').animate({
        scrollLeft: '+=500'
      }, 500, 'swing');
    });
  });
  
$(function() {
    // Seu código JavaScript aqui
    $('#prev-leite').on('click', function() {
      $('#cards-leite').animate({
        scrollLeft: '-=500'
      }, 500, 'swing');
    });
  
    $('#next-leite').on('click', function() {
      $('#cards-leite').animate({
        scrollLeft: '+=500'
      }, 500, 'swing');
    });
  });
  

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
    var adicionar222Btn = document.querySelector('#adicionar222');
    var subtrair222Btn = document.querySelector('#subtrair222');
    var contadorElement = document.querySelector('#box8 #contadorrr');
    var contadorrr2 = document.querySelector('#contadorrr2');
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




// document.addEventListener('DOMContentLoaded', function () {
//     function contarItensVisiveis() {
//         var itensDaLista = document.querySelectorAll('.itensDaLista.visibleDiv');
//         var totalItensDaLista = itensDaLista.length;

//         // Atualiza o total de itens visíveis no elemento com id "totalItensDaLista"
//         document.getElementById('totalItensDaLista').innerText = totalItensDaLista.toString();
//     }

//     // Cria um observador de mutação para observar alterações no DOM
//     var observer = new MutationObserver(contarItensVisiveis);

//     // Configura o observador para observar alterações nas classes dos elementos filhos de #myDiv
//     observer.observe(document.getElementById('myDiv'), { subtree: true, attributes: true, attributeFilter: ['class'] });

//     // Adiciona um ouvinte de eventos ao botão de alternância
//     document.getElementById('toggleButton').addEventListener('click', function () {
//         // Adiciona ou remove a classe .visibleDiv do elemento com id "myDiv"
//         document.getElementById('myDiv').classList.toggle('visibleDiv');
//     });

//     // Chame a função inicialmente para configurar o total de itens visíveis
//     contarItensVisiveis();
// });



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
  



