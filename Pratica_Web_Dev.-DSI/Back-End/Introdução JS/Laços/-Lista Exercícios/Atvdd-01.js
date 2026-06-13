let quantNum;
do {
    alert(`
        ----- SISTEMA DE ANÁLISE -----\n
        Bem Vindo ao Sistema de Análise de Paridade!
        `);

    let entradaQuant = prompt(`
        Digite quantos números deseja verificar a paridade:
    `);

    if (entradaQuant === null) break;

    quantNum = Number(entradaQuant);

    if (entradaQuant.trim() === "" || isNaN(quantNum) || quantNum < 0) {
            alert(`
            ----- FALHA DE ANÁLISE -----\n
            Digite números válidos para análise de paridade.
            `)
            continue;
        }
    quantNum = Number(quantNum);
    
    if (quantNum === 0) break;

    let numPar = "";


    for (let i = 1; i <= quantNum; i++) {
        let entradaVerif = prompt(`
                Digite o ${i}º número que deseja verificar:
                `);

        if (entradaVerif === null || entradaVerif.trim() === "" || Number(entradaVerif) < 0 || isNaN(Number(entradaVerif))) {
            alert(`
                    ----- FALHA DE ANÁLISE -----\n
                    Digite números válidos para análise de paridade.
                    `);
            --i;
            continue;
        }
        let numsVerif = Number(entradaVerif);

        if (numsVerif % 2 === 0) {
            if (numPar === "") {
                numPar = String(numsVerif);
            } else {
                numPar = numPar + ", " + numsVerif;
            }
        }
    }

        let mensagemFinal = numPar !== "" ? numPar + "." : "Nenhum" + ".";
alert(`
            --- RESULTADO DA ANÁLISE ---\n
            Análise Realizada com Sucesso!
            Os números pares inseridos são: ${mensagemFinal}
            `);

    } while (quantNum !== 0);