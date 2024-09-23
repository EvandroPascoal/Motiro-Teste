let searchList = [];

function addToList() {
    
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchInput !== '') {
        searchList.push(searchInput);
        document.getElementById('searchInput').value = ''; // Limpa o campo de entrada
        updateSearchList();
        showSearchButton(); // Mostra o botão de pesquisa
    }
}

function updateSearchList() {
    const searchListContainer = document.getElementById('searchList');
    searchListContainer.innerHTML = '';

    searchList.forEach(term => {
        const termDiv = document.createElement('div');
        termDiv.classList.add('searchListItem'); // Adiciona a classe com a borda inferior
        termDiv.textContent = term;
        searchListContainer.appendChild(termDiv);
    });
}

function showSearchButton() {
    const searchButton = document.getElementById('pesquisar222');
    searchButton.style.display = 'block';
}

function search() {
    // Divs a serem pesquisadas
    const divsToSearch = ['arroz', 'feijao', 'leite'];

    // Exibe divs correspondentes e oculta as outras
    divsToSearch.forEach(divId => {
        const div = document.getElementById(divId);
        if (searchList.includes(divId) || searchList.includes('todos')) {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    });

    const imgFundoFigma = document.querySelector('.imgFundoFigma');
    imgFundoFigma.style.display = 'none';
    document.getElementById('pesquisar222').addEventListener('click', search);
}


function removeFromList(index) {
    searchList.splice(index, 1);
    updateSearchList();
    if (searchList.length === 0) {
        hideSearchButton(); // Esconde o botão de pesquisa se a lista estiver vazia
    }
}

function updateSearchList() {
    const searchListContainer = document.getElementById('searchList');
    searchListContainer.innerHTML = '';

    searchList.forEach((term, index) => {
        const termDiv = document.createElement('div');
        termDiv.classList.add('searchListItem');

        // Adiciona o termo
        termDiv.textContent = term;

        // Adiciona um botão de exclusão com a classe CSS
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('deleteButton');
        deleteButton.addEventListener('click', () => removeFromList(index));
        termDiv.appendChild(deleteButton);

        searchListContainer.appendChild(termDiv);
    });


if (typeof indexToRemove !== 'undefined') {
    searchList.splice(indexToRemove, 1);
}
}

function hideSearchButton() {
    const searchButton = document.getElementById('pesquisar222');
    searchButton.style.display = 'none';
}


function removerTermoDaLista(termo) {
    const indexToRemove = searchList.indexOf(termo);
    if (indexToRemove !== -1) {
        removeFromList(indexToRemove);
    }
}

