var botaoDoparcipante = document.getElementById('botaoDoparcipante');

botaoDoparcipante.addEventListener('click', function() {
    document.getElementById('visualizarDoparcipante').style.display = 'none';
    document.getElementById('listaDoparcipante').style.display = 'block';
    botaoDoparcipante.classList.add('amarelo');
});

document.querySelector('.botaoFecharLista').addEventListener('click', function() {
    document.getElementById('visualizarDoparcipante').style.display = 'block';
    document.getElementById('listaDoparcipante').style.display = 'none';
    botaoDoparcipante.classList.remove('amarelo');
});

var botaoDoparcipante = document.getElementById('botaoDoparcipante');
var listaDoparcipante2 = document.getElementById('listaDoparcipante2');
var listaDoparcipante = document.getElementById('listaDoparcipante');

function ajustarComportamento() {
    if (window.innerWidth < 800) {
        // Largura menor que 800px
        botaoDoparcipante.classList.remove('amarelo');
        botaoDoparcipante.classList.add('branco');
        listaDoparcipante2.style.display = 'none';
    } else {
        // Largura maior ou igual a 800px
        botaoDoparcipante.classList.add('branco');
        botaoDoparcipante.classList.remove('branco');
        listaDoparcipante2.style.display = 'none';
        listaDoparcipante.style.display = 'none';
        document.getElementById('visualizarDoparcipante').style.display = 'block';
    }
}

// Event listener para o clique no botão
botaoDoparcipante.addEventListener('click', function() {
    if (window.innerWidth < 800) {
        document.getElementById('visualizarDoparcipante').style.display = 'none';
        listaDoparcipante2.style.display = 'block';
        botaoDoparcipante.classList.add('amarelo');
    }
});

// Event listener para o clique no botão de fechar
document.querySelector('.botaoFecharLista2').addEventListener('click', function() {
    if (window.innerWidth < 800) {
        document.getElementById('visualizarDoparcipante').style.display = 'block';
        listaDoparcipante2.style.display = 'none';
        botaoDoparcipante.classList.remove('amarelo');
    }
});

// Event listener para o redimensionamento da janela
window.addEventListener('resize', function() {
    ajustarComportamento();
});

// Chama a função após o carregamento da página para definir o comportamento inicial
ajustarComportamento();