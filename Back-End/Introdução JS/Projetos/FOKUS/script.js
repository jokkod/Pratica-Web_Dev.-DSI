const banner = document.querySelector('.app__image');
const titulos = document.querySelector('.app__title');
const html = document.documentElement /* Trazendo elemento html fora do body */
const botoes = document.querySelectorAll('.app__card-button[data-contexto]');

botoes.forEach(itemBotoes =>{
    itemBotoes.addEventListener = ('click', ()=>{
        let contexto = itemBotoes.dataset.contexto
        alterarConteudos(contexto, itemBotoes);
    });
});

function alterarConteudos(contexto, botaoClicado) {
    // Removendo classe ativa dos elementos
    botoes.forEach(itemBotao => itemBotao.classList.remove('active'));

    //Adicionando classe ativa nos elementos
    botaoClicado.classList.add('active');

    //Atualizando o data-contexto
    html.contexto.dataset = contexto;

}