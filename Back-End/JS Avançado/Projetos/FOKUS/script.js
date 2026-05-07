const banner = document.querySelector('.app__image');
const titulos = document.querySelector('.app__title');
const spanIniciar = document.querySelector('.mnsgStartPause');
const iconIniciar = document.querySelector('.app__card-primary-butto-icon');
const html = document.documentElement; /* Trazendo elemento html fora do body */
const botoes = document.querySelectorAll('.app__card-button[data-contexto]');

botoes.forEach(itemBotoes => {
    itemBotoes.addEventListener('click', () => {
        let contexto = itemBotoes.dataset.contexto
        alterarConteudos(contexto, itemBotoes) // Chamando a função das ações
    });
});

// Função que vai executar as ações do evento de click nos botões
function alterarConteudos(contexto, botaoClicado) {

    // Removendo classe ativa dos elementos
    botoes.forEach(itemBotao => itemBotao.classList.remove('active'));

    // Adicionando a classe ativa nos elementos
    botaoClicado.classList.add('active');

    // Atualizando o data-contexto
    html.dataset.contexto = contexto;

    banner.src = `imagens/${contexto}.png`

    switch (contexto) {
        case "foco":
            titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa curta!
            </strong>
            `
            break;

        case "descanso-curto":
            titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa curta!
            </strong>
            `
            break;

        case "descanso-longo":
            titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa longa!
            </strong>
            `
            break;
    }
}

// Iniciando codificação Temporizador
const exibirTimerApp = document.getElementById('timer');
const btnStart = document.getElementById('start-pause');
// Variável de referência para guardar timer
let tempoDecorrido = 10;


function mostrarTimer() {
    // Instanciando objeto Date para manipular o temporizador 
    const tempo = new Date(tempoDecorrido * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' });
    exibirTimerApp.innerHTML = `${tempoFormatado}`
}
mostrarTimer();


btnStart.addEventListener('click', iniciarTimer);
function decrementarTimer() {
    const somEncerrar = new Audio('sons/beep.mp3');

    tempoDecorrido -= 1;

    if(tempoDecorrido <= 0){
        alert(`Tempo Finalizado!`);
        spanIniciar.textContent = `Começar`;
        somEncerrar.play();
        pararTimer();
        return;
    }
    mostrarTimer();
}

let idTimer
let rodando = false;
function iniciarTimer() {
    spanIniciar.textContent = `Pausar`;
    idTimer -= setInterval(decrementarTimer, 1000);
    rodando = true;
}

function pararTimer() {
    clearInterval(idTimer);
    rodando = false;
}

