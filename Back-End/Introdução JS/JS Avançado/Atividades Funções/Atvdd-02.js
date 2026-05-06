let UltmCalculo = null;
let processCalculo = document.querySelector('.calcLiquido');
let exibirResumo = document.querySelector('.resumoCalc');
let processSaida = document.querySelector

processCalculo.addEventListener('click', processCalculo);
function processCalculo() {
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

    let horasTrabalho = ""
    while ( horasTrabalho === "" || isNaN(horasTrabalho) || horasTrabalho <= 0) {
        horasTrabalho = prompt(`
            Digite o valor da sua hora de trabalho:
            `);
        if (horasTrabalho === null) return;
    }
    horasTrabalho = parseFloat(horasTrabalho);

    let salarioBruto = valorHora * horasTrabalho;

    let descontoINSS = 0;
    if (salarioBruto <= 1500) {
        descontoINSS = salarioBruto * 0.08;
    } else if (salarioBruto <= 3000) {
        descontoINSS = salarioBruto * 0.09;
    } else {
        descontoINSS = salarioBruto * 0.11;
    }
}
