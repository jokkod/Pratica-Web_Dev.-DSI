let numsVerif;
let quantNum;

do {
    let numPar = "";

    alert(`
        ----- SISTEMA DE ANÁLISE -----\n
        Bem Vindo ao Sistema de Análise de Paridade!
        `);

    quantNum = +prompt(`
        Digite quantos números deseja verificar a paridade:
    `);
    if (quantNum || quantNum <= 0 || isNaN(quantNum)) {
        if (quantNum !== 0) alert(`
            ----- FALHA DE ANÁLISE -----\n
            Digite números válidos para análise de paridade.
            `)
    } else {
        for (let i = 1; i <= quantNum; i++) {
            numsVerif = +prompt(`
                Digite o ${i}º número que deseja verificar:
                `);

            if (numsVerif % 2 == 0) {
                numPar += (numPar === "" ? "" : ", ") + numsVerif;
            }
        }
        let mensagemFinal = numPar !== "" ? numPar + "." : "Nenhum";

        alert(`
        --- RESULTADO DA ANÁLISE ---\n
        Análise Realizada com Sucesso!
        Os números pares inseridos são: ${mensagemFinal}
        `);
    }

} while (quantNum !== 0)