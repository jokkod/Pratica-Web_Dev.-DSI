let quantMaiorIdade = 0;
let quantMenorIdade = 0;
let idade = 0;

for (let cont = 1; cont <= 3; cont++) {
    idade = +prompt("Insira sua idade:");
    if (idade >= 18) {
        quantMaiorIdade += 1;
    } else {
        quantMenorIdade += 1;
    }
}

alert(`
        Dados das Idades: 
    Quantidade de Pessoas Maiores de Idade: ${quantMaiorIdade}
    Quantidade de Pessoas Menores de Idade: ${quantMenorIdade}
    `)