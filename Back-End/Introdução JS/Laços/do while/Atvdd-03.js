let idadeAdequada;
let nomeCandidato;
alert(`
    --- BEM VINDO AO PROGRAMA DE AGENDAMENTO* ---\n
    *Agendamento para a prova de habilitação
    Preencha os Campos Adequadamente para Participar da Prova.
    `);
do {
    nomeCandidato = prompt(`
        Digite seu nome completo:
        `)
    idadeAdequada = +prompt(`
        Digite sua idade para verificação adequação à prova:
        `);

    if (nomeCandidato && parseInt(idadeAdequada) && idadeAdequada > 0 && !isNaN(idadeAdequada)) {
        if (idadeAdequada >= 18) {
            alert(`
            --- RESULTADO DO AGENDAMENTO ---\n
            Candidato: ${nomeCandidato}
            IDADE VÁLIDA!\n Sua candidatura para prova de habilitação foi permitida
            `);
            break;
        } else {
            alert(`
                --- RESULTADO DO AGENDAMENTO ---\n
                Idade Inválida!
                 `);
            break;

        }
    } else {
        alert(`
            --- FALHA NO AGENDAMENTO ---\n
            Idade Inválida!
                 `);
    }
} while (idadeAdequada >= 18);