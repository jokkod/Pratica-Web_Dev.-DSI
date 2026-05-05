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

function exibirResult() {
    let totalVotos = votos[0] + votos[1] + votos[2] + votos[3];

    if (totalVotos === 0) {
        alert(`
            Nenhum Voto Registrado.
            `);
        return;
    }
    let nomes = ["Branco", "Candidato A", "Candidato B", "Candidato C"];
    let resultado = `---RESUMO DA VOTAÇÃO---\nTotal de Votos Realizados: ${totalVotos}\n\n`

    for (i = 0; i <= votos.length; i++){
        let calcPercetual = (votos[i] / totalVotos) * 100;
        resultado += `Votos por Candidato\n${nomes[i]}: ${votos[i]} votos | (${percentual.toFixed(1)}% dos votos)\n\n`
    }

    let CA = votos[1];
    let CB = votos[2];
    let CC = votos[3];
    let MnsgVencedor = "";

    if (CA === CB && CA === CC) {
        MnsgVencedor = "---RESULTADO FINAL---\nTodos os candidatos empataram!"
    } else if (CA === CB && CA > CC) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos A e B empataram!"
    } else if (CA === CC && CA > CB) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos A e C empataram!"
    } else if (CB === CC && CB > CA) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos B e C empataram!"
    } else if (CA > CB && CA > CC) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos A é o Vencedor!"
    } else if (CB > CA && CB > CC) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos B é o Vencedor!"
    } else if (CC > CA && CC > CA) {
        MnsgVencedor = "---RESULTADO FINAL---\nCandidatos C é o Vencedor!"
    } else {
        mensagemVencedor = "Votos insuficientes para determinar um vencedor.";
    }

    alert(resultado + `${MnsgVencedor}`)
}

function resetVotação() {

}