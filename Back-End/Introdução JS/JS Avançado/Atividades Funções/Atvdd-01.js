function calcTriang() {
    let altura1 = "";
    let base1 = "";
    alert(`
        --- Inicializando Cálculo de Área de Triângulo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
    while (altura1 !== 0 && altura1 !== null && base1 !== 0 && base1 !== null) {
        let base1 = Number(
            prompt(`
        Digite um valor para a medida da base:
        `),
        );
        let altura1 = Number(
            prompt(`
        Digite um valor para a medida da altura:
        `),
        );

        if (base1 === null || altura1 === null || base1 === "" || altura1 === "") break;

        if (base1 > 0 && altura1 > 0) {
            let calc1 = (base1 * altura1) / 2;
            alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc1.toFixed(2)}
        `);
            break;
        } else {
            alert(`
                ----- ERRO -----\n
                Digite valores de medida válidas!
                `);
        }
    }
}

function calcRet() {
    let altura2 = "";
    let base2 = "";
    alert(`
        --- Inicializando Cálculo de Área de Retângulo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);

    while (base2 !== 0 && base2 !== null && altura2 !== 0 && altura2 !== null) {
        let base2 = Number(
            prompt(`
        Digite um valor para a medida da base:
        `),
        );
        let altura2 = Number(
            prompt(`
        Digite um valor para a medida da altura:
        `),
        );

        if (base2 === null || altura2 === null || base2 === "" || altura2 === "") break;

        if (base2 > 0 && altura2 > 0) {
            let calc2 = base2 * altura2;

            alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc2}
        `);
            break;
        } else {
            alert(`
                ----- ERRO -----\n
                Digite valores de medida válidas!
                `);
        }
    }
}

function calcQuadr() {
    let lado = "";
    alert(`
        --- Inicializando Cálculo de Área de Quadrado ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);
    while (lado !== 0 && lado !== null) {
        let lado = Number(
            prompt(`
        Digite um valor para a medida do lado:
        `),
        );

        if (lado === null || lado === "") break;

        if (lado > 0) {
            let calc3 = lado * lado;

            alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc3}
        `);
            break;
        } else {
            alert(`
                ----- ERRO -----\n
                Digite um valor de medida válida!
                `);
        }
    }
}

function calcTrap() {
    let baseM = ""
    let basem = ""
    let altura3 = ""
    alert(`
        --- Inicializando Cálculo de Área de Trapézio ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);

    while (baseM !== 0 || baseM !== null || altura3 !== 0 || altura3 !== null ||
        basem !== 0 || basem !== null) {
        let baseM = Number(
            prompt(`
        Digite um valor para a medida da base maior:
        `),
        );
        let basem = Number(
            prompt(`
        Digite um valor para a medida da base menor:
        `),
        );
        let altura3 = Number(
            prompt(`
        Digite um valor para a medida da altura:
        `),
        );

        if (baseM === null || baseM === "" || basem === null || basem === "" || altura3 === null || altura3 === "") break;

        if ((baseM > 0 || basem > 0) && altura3 > 0) {
            let calc4 = ((baseM + basem) * altura3) / 2;

            alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc4.toFixed(2)}
        `);
            break;
        } else {
            alert(`
                ----- ERRO -----\n
                Digite valores de medida válidas!
                `);
        }
    }
}

function calcCirc() {
    let raio = "";
    alert(`
        --- Inicializando Cálculo de Área de Círculo ---\n
        Digite, a seguir, informações necessárias para Cálculo.
        `);

    while (raio !== 0 || raio !== null) {
        let pi = 3.14;
        let raio = Number(prompt(`
        Digite um valor para a medida da raio do círculo:
        * Lembrando que o Raio é METADE do diâmetro.
        `));

        if (raio === null || raio === "") break;

        if (raio > 0) {
            let calc5 = pi * (raio * raio);

            alert(`
        RESULTADO DA OPERAÇÃO:
        ${calc5}
        `);
            break;
        } else {
            alert(`
                ----- ERRO -----\n
                Digite um valor de medida válida!
                `);
        }
    }
}
do {

    let escolhaopcao = Number(prompt(`
        Escolha uma das opções que deseja realizar:
        1- Cálculo da Área do Triângulo
        2- Cálculo da Área do Retângulo
        3- Cálculo da Área do Quadrado
        4- Cálculo da Área do Trapézio
        5- Cálculo da Área do Círculo
        6- Sair das Opções
        `));

    switch (escolhaopcao) {
        case 1:
            calcTriang()
            break;
        case 2:
            calcRet()
            break;
        case 3:
            calcQuadr()
            break;
        case 4:
            calcTrap()
            break;
        case 5:
            calcCirc()
            break;
        case 6:
            alert(`
            Saindo...
            `);
            break;
        default:
            if (escolhaopcao !== null && escolhaopcao !== "6") {
                alert("Opção inválida!");
            }
            break;
    }
} while (escolhaopção !== "6" && escolhaopcao !== null);