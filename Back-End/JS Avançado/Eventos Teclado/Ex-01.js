const input = document.getElementById('texto');
const divConteudo = document.getElementById('conteudo');

//Evento de Apertar a tecla = keydown
input.addEventListener('keydown', () => {
    divConteudo.innerText = `Apertou a tecla!`
});

//Evento de Soltar a tecla = keyup
input.addEventListener('keyup', () => {
    divConteudo.innerText = `Soltou a tecla!`
});

//Evento de Pressionar a tecla = keypress
input.addEventListener('keypress', () => {
    divConteudo.innerText = `Pressionou a tecla`
});