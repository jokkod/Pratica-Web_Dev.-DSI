const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = `Sistema de Escalação`

const txtPosicao = document.createElement('label');
txtPosicao.innerText = `Informe a posição do jogador a ser escalado:\n`
const inputPosicao = document.createElement('input');
txtPosicao.classList.add('txtPosition');

const txtNome = document.createElement('label');
txtNome.innerText = `\n\nInforme o nome do jogador a ser escalado:\n`;
const inputNome = document.createElement('input');
txtNome.classList.add('txtNome');

const txtNumero = document.createElement('label');
txtNumero.innerText = `\n\nInforme o número do jogador a ser escalado:\n`;
const inputNumero = document.createElement('input');
txtNumero.classList.add('txtNum');

const buttonConfirm = document.createElement('button');
buttonConfirm.innerText = `Confirmar Escalação`
buttonConfirm.classList.add('btn-confirm');
buttonConfirm.style.cursor = 'pointer';


body.append(h1, txtPosicao, inputPosicao, txtNome, inputNome, txtNumero, inputNumero, buttonConfirm);