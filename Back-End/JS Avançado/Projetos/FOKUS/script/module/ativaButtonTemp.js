export default function initButtonTemp() {
    const banner = document.querySelector('.app__image');
    const titulos = document.querySelector('.app__title');
    const spanIniciar = document.querySelector('.mnsgStartPause');
    const html = document.documentElement; /* Trazendo elemento html fora do body */
    const botoes = document.querySelectorAll('.app__card-button[data-contexto]');

    botoes.forEach(itemBotoes => {
        itemBotoes.addEventListener('click', () => {
            let contexto = itemBotoes.dataset.contexto
            alterarConteudos(contexto, itemBotoes) // Chamando a função das ações
        });
    });

    const somAlterar = new Audio('sons/move.mp3');
    // Função que vai executar as ações do evento de click nos botões
    function alterarConteudos(contexto, botaoClicado) {

        // Removendo classe ativa dos elementos
        botoes.forEach(itemBotao => itemBotao.classList.remove('active'));

        // Adicionando a classe ativa nos elementos
        botaoClicado.classList.add('active');

        // Atualizando o data-contexto
        html.dataset.contexto = contexto;

        banner.src = `imagens/${contexto}.png`;

        somAlterar.play();
        switch (contexto) {
            case "foco":
                tempoDecorrido = 15;
                mostrarTimer();
                titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa curta!
            </strong>
            `;
                break;

            case "descanso-curto":
                tempoDecorrido = 600;
                mostrarTimer();
                titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa curta!
            </strong>
            `;
                break;

            case "descanso-longo":
                tempoDecorrido = 900;
                mostrarTimer();
                titulos.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app_title-strong">
                Faça uma pausa longa!
            </strong>
            `;
                break;
        }
    }

    // Iniciando codificação temporizador
    const exibirTimerApp = document.getElementById('timer');
    const btnStart = document.getElementById('start-pause');
    // Variável de referência para guardar timer
    let tempoDecorrido = 15;


    function mostrarTimer() {
        // Instanciando objeto Date para manipular o temporizador 
        const tempo = new Date(tempoDecorrido * 1000);
        const tempoFormatado = tempo.toLocaleTimeString('pt-br', { minute: '2-digit', second: '2-digit' });
        exibirTimerApp.innerHTML = `${tempoFormatado}`
    }
    mostrarTimer();

    btnStart.addEventListener('click', iniciaPausaTimer);
    function decrementarTimer() {
        const som = new Audio('sons/beep.mp3');
        som.loop = true;

        if (tempoDecorrido <= 0) {
            som.play();
            setTimeout(() => {
                alert(`Tempo Finalizado!`);
                som.pause();

                iconIniciar.src = 'imagens/play_arrow.png';
                spanIniciar.textContent = `Iniciar`;

                const contextoAtual = html.dataset.contexto;
                if (contextoAtual === 'descanso-curto') {
                    tempoDecorrido = 600;
                } else if (contextoAtual === 'descanso-longo') {
                    tempoDecorrido = 900;
                } else {
                    tempoDecorrido = 15;
                }

                mostrarTimer();
            }, 100);

            pararTimer();
            return;
        }
        tempoDecorrido -= 1;
        if (tempoDecorrido -= 1) {
            resetIniciar.style.display = "flex";
        }
        mostrarTimer();
    }

    let idTimer
    let rodando = false;
    const iconIniciar = document.querySelector('.app__card-primary-butto-icon');
    const audioIniciar = new Audio('sons/play.wav');
    const audioPausar = new Audio('sons/pause.mp3');
    function iniciaPausaTimer() {
        if (rodando) {
            iconIniciar.src = `imagens/play_arrow.png`
            spanIniciar.textContent = `Iniciar`;
            audioPausar.play();
            pararTimer();
            return;
        }
        iconIniciar.src = `imagens/pause.png`;
        spanIniciar.textContent = `Pausar`;
        audioIniciar.play();
        idTimer = setInterval(decrementarTimer, 1000);
        rodando = true;
    }

    function pararTimer() {
        clearInterval(idTimer);
        rodando = false;
    }

    const resetIniciar = document.querySelector('.app__card-secondary-button');
    function resetarTimer() {
        const somReturn = new Audio('sons/return.mp3');

        resetIniciar.addEventListener('click', () => {
            pararTimer();
            somReturn.play();

            const contextoEscolhido = html.dataset.contexto;
            switch (contextoEscolhido) {
                case "foco":
                    tempoDecorrido = 15;
                    break;
                case "descanso-curto":
                    tempoDecorrido = 600;
                    break;
                case "descanso-longo":
                    tempoDecorrido = 900;
                    break;
            }
            mostrarTimer();
            resetIniciar.style.display = "none";
            iconIniciar.src = `imagens/play_arrow.png`
            spanIniciar.textContent = `Iniciar`;
        });
    }
    resetarTimer();
}