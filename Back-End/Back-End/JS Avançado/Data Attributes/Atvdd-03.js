const botoes = document.querySelectorAll('.plano[data-plano]')
const areaMensagem = document.querySelector('#mensagem-confirmacao');

botoes.forEach(botaoClicado => {
    botaoClicado.addEventListener('click', () => {
        const tipoPlano = botaoClicado.dataset.plano;

        const mensagem = `Assinatura do plano ${tipoPlano} ativa`;

        exibirMensagem(mensagem, botaoClicado);
    });
});

function exibirMensagem(mensagem, botaoClicado) {
    botoes.forEach(btn => {
        btn.classList.remove('active');
    });

    botaoClicado.classList.add('active');

    areaMensagem.textContent = mensagem;

    areaMensagem.style.color = "#00f000";
}