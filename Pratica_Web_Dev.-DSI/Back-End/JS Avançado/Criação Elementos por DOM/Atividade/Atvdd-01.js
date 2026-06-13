const body = document.querySelector('body');

const h1 = document.createElement('h1');
h1.innerText = `Sistema de Escalação`;

const txtPosicao = document.createElement('label');
txtPosicao.innerText = `Informe a posição do jogador a ser escalado:\n`
const inputPosicao = document.createElement('input');
inputPosicao.pattern = "^([Gg]oleiro|[Zz]agueiro|[Vv]olante|[Ll]ateral|[Mm]eio-[Cc]ampista|[Aa]tacante)$";

const txtNome = document.createElement('label');
txtNome.innerText = `\n\nInforme o nome do jogador a ser escalado:\n`;
const inputNome = document.createElement('input');
inputNome.pattern = "^[A-Za-zÀ-ÿ]+$";

const txtNumero = document.createElement('label');
txtNumero.innerText = `\n\nInforme o número do jogador a ser escalado:\n`;
const inputNumero = document.createElement('input');
inputNumero.pattern = "[0-9]+";

const buttonConfirm = document.createElement('button');
buttonConfirm.innerText = `Confirmar Escalação`;
buttonConfirm.classList.add('btn-confirm');
buttonConfirm.style.cursor = 'pointer';

const avisoConfirm = document.createElement('p');

const hr1 = document.createElement('hr');

const ul = document.createElement('ul');
ul.id = 'listaEscalacao';

const hr2 = document.createElement('hr');

const txtRemove = document.createElement('label');
txtRemove.innerText = `\n\nInforme o número do jogador que deseja remover:\n`;
const inputRemove = document.createElement('input');
inputRemove.pattern = "[0-9]+";

const buttonRemove = document.createElement('button');
buttonRemove.innerText = `Remover Escalação`;
buttonRemove.classList.add('btn-remove');
buttonRemove.style.cursor = 'pointer';

const avisoRemove = document.createElement('p');

body.append(h1, txtPosicao, inputPosicao, txtNome, inputNome, txtNumero, inputNumero,
    buttonConfirm, avisoConfirm, hr1, ul, hr2, txtRemove, inputRemove, buttonRemove, avisoRemove);
let escalacao = [];

buttonConfirm.addEventListener('click', () => {
    const posicao = inputPosicao.value.trim();
    const nome = inputNome.value.trim();
    const numero = inputNumero.value.trim();

    if (posicao === "" || nome === "" || numero === "" ||
        !(inputPosicao.validity.valid) || !(inputNome.validity.valid) || !(inputNumero.validity.valid)) {
        avisoConfirm.innerText = `Por Favor, Preencha os campos corretamente!`;
        avisoConfirm.style.color = "red";
        return;
    }

    const nomeFormatado = nome.toLowerCase().replace(/(^\w|\s\w)/g, L => L.toUpperCase());

    const novoJogador = {
        posicao: inputPosicao.value,
        nome: nomeFormatado,
        numero: inputNumero.value,
    }
    escalacao.push(novoJogador);

    const li = document.createElement('li');
    li.id = `jogador-${novoJogador.numero}`
    li.innerText = `${novoJogador.posicao}: ${novoJogador.nome} (Número ${novoJogador.numero})`;
    ul.appendChild(li);

    avisoConfirm.innerText = "Jogador escalado com sucesso!";
    avisoConfirm.style.color = "green";
    inputPosicao.value = "";
    inputNome.value = "";
    inputNumero.value = "";
});

buttonRemove.addEventListener('click', () => {
    const numJogador = inputRemove.value.trim();

    const jogadorElemento = document.getElementById(`jogador-${numJogador}`);

    if (numJogador !== "" && jogadorElemento) {
        ul.removeChild(jogadorElemento);

        escalacao = escalacao.filter(jogador => jogador.numero !== numJogador);
        avisoRemove.innerText = `Jogador nº ${numJogador} removido!`;
        avisoRemove.style.color = "blue";
        inputRemove.value = "";
    } else {
        avisoRemove.innerText = `Jogador não encontrado na lista de escalação!`
        avisoRemove.style.color = "purple";
    }
});