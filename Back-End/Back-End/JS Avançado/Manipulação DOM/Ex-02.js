const buttonContent = document.querySelector('.content');
const buttonInner = document.querySelector('.inner');
let divText = document.getElementById('exemplo');

buttonContent.addEventListener('click', exibirTexto1);
function exibirTexto1() {
    let paragrafo = document.querySelector('.result-text-content');
    paragrafo.textContent = divText.textContent;
}

buttonInner.addEventListener('click', exibirTexto2);
function exibirTexto2() {
    let paragrafo = document.querySelector('.result-inner-text');
    paragrafo.innerText = divText.innerText;
}