let UltmCalculo = null;
let processCalculo = document.querySelector('.calcLiquido');
let exibirResumo = document.querySelector('.resumoCalc');
let processSaida = document.querySelector('.sair');

processCalculo.addEventListener('click', realizarCalculo);
function realizarCalculo() {
    alert(`
        --- Sistema de Cálculo de Salário Líquido ---
        `);
    let valorHora = "";
    while (valorHora === "" || isNaN(valorHora) || valorHora <= 0) {
        valorHora = prompt(`
            Digite o valor da sua hora de trabalho:
            `);
        if (valorHora === null) return;
    }
    valorHora = parseFloat(valorHora);

    let horasTrabalho = "";
    while (horasTrabalho === "" || isNaN(horasTrabalho) || horasTrabalho <= 0) {
        horasTrabalho = prompt(`
            Digite quantas horas trabalhadas possui:
            `);
        if (horasTrabalho === null) return;
    }
    horasTrabalho = parseFloat(horasTrabalho);

    let salarioBruto = valorHora * horasTrabalho;

    let VTconfirmado = true
    let descontoVT = 0;
    while (VTconfirmado) {
        let entradaVT = prompt(`
            Informe se você possui vale-transporte:
            `);
        if (entradaVT === null) return;
        let r = entradaVT.trim()
        descontoVTFinal = parseFloat(descontoVT)

        if (r == "s" || r == "sim" || r == "S" || r == "Sim" || r == "SIM") {
            descontoVTFinal = salarioBruto * 0.06;
            VTconfirmado = false;
        } else if (r == "n" || r == "N" || r == "nao" || r == "não" || r == "Nao" || r == "Não" ||
            entradaVT == "NAO" || entradaVT == "NÃO") {
            descontoVTFinal = 0;
            VTconfirmado = false;
        } else {
            alert("Entrada Inválida.");
            VTconfirmado = false;
        }
    }

        let bonus = "";
        if (horasTrabalho > 160) {
            bonus = salarioBruto * 0.05;
        }

        let descontoINSS = 0;
        if (salarioBruto <= 1500) {
            descontoINSS = salarioBruto * 0.08;
        } else if (salarioBruto <= 3000) {
            descontoINSS = salarioBruto * 0.09;
        } else {
            descontoINSS = salarioBruto * 0.11;
        }

        salarioLiquido = salarioBruto - descontoINSS - descontoVTFinal + bonus

        dadosUltimoCalculo = {
            bruto: salarioBruto,
            liquido: salarioLiquido,
            inss: descontoINSS,
            vt: descontoVTFinal,
            bonus: bonus
        };

        alert(`Cálculo realizado com sucesso!\n Para ver resultado clique em Exibir resumo do cálculo `)
    }

    exibirResumo.addEventListener('click', function () {
        if (!dadosUltimoCalculo) {
            alert("Nenhum cálculo foi realizado ainda!");
            return;
        }
        resumoCalc(
            dadosUltimoCalculo.bruto,
            dadosUltimoCalculo.liquido,
            dadosUltimoCalculo.inss,
            dadosUltimoCalculo.vt,
            dadosUltimoCalculo.bonus
        );
    })

    function resumoCalc(bruto, liquido, inss, vt, bonus) {
        alert(`
            --- Resumo do Cálculo Salarial ---\n\n
            Salário Bruto: R$ ${bruto.toFixed(2)}\n
            (-) Desconto do Inss: R$ ${inss.toFixed(2)}\n
            (-) Desconto Vale-Transporte: R$ ${vt.toFixed(2)}\n
            (+) Bônus: R$ ${bonus.toFixed(2)}\n
            ----------------------------------\n
            Salário Líquido: R$ ${liquido.toFixed(2)}\n
            `);
    }

    processSaida.addEventListener('click', realizarSaida);
    function realizarSaida() {
        alert(`
        Sistema Encerrado!
        `);

        document.querySelector('.calcLiquido').disabled = true;
        document.querySelector('.resumoCalc').disabled = true;
    }