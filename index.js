// Seleciona o botão pela classe
const toggleButton = document.querySelector('.toggleBackground');

// Adiciona um listener de evento de clique ao botão
toggleButton.addEventListener('click', function() {
    // Seleciona o elemento body
    const body = document.body;

    // Verifica a cor de fundo atual e alterna entre dark-mode e normal
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
});
