let votos = [0, 0, 0, 0];
function realizarVotos() {
    alert(`
        --- SISTEMA DE VOTAÇÃO ---\n
        Digite o número referente ao seu candidato
        `);

    while (true) {
        let entradaVoto = Number(prompt(`
        Digite seu voto:\n
        0 = Voto em Branco\n
        1 = Candidato A\n
        2 = Candidato B\n
        3 = Candidato C\n
        `));

        if ( entradaVoto === null) {
            alert(`
                ----- ERRO -----\n
                Opção Inválida!Por Favor, Escolha opção de 0 a 3.
                `);
            continue;
        }

        let opcaoVoto = parseInt(entradaVoto);

        if (isNaN(opcaoVoto) || opcaoVoto > 3 || opcaoVoto < 0) {
            alert(`
                ----- ERRO -----\n
                Opção Inválida!Por Favor, Escolha opção de 0 a 3.
                `);
            continue;
        }

        votos[voto]++
        alert("Voto confirmado com sucesso!");
        break;
    }
}

/* function exibirResult() {

}

function resetVotação() {

} */