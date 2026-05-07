const html = document.documentElement;
const tituloh1 = document.getElementById('tituloPrinc');
const tituloh2 = document.getElementById('subtitulo');
const botoes = document.querySelectorAll('.corPri');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const tema = botao.dataset.cor;

        tituloh1.style.color = "#fafafa";
        tituloh2.style.color = "#fafafa";

        html.style.backgroundColor = tema;
    });
});