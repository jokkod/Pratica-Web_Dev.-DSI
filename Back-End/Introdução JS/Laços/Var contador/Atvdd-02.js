/* Sistema de Pontuação de Jogo
Você está desenvolvendo um jogo estilo arcade. O jogador passa por N fases e em cada fase ganha uma quantidade de pontos.
Faça um programa que:
•	Leia o número de fases jogadas 
•	Para cada fase, leia a pontuação obtida 
•	Ao final, mostre: 
o	Pontuação total 
o	Média de pontos por fase 
o	Quantas fases tiveram pontuação acima de 100 */

let numFases = 0;
let pntsFases = 0;
let pontuaçãoTotal = 0;
let mediaPontos = 0
let fasesPntsSup = 0

alert(`Bem vindo ao sistema de numeração final de fases!`)
numFases = +prompt(`Digite a quantidade de fases concluídas:`);
for (let i = 1; i <= 5; i++) {
    pntsFases = +prompt(`Digite os pontos obtidos na ${i}ª fase: `)
    pontuaçãoTotal += pntsFases;

    if (pntsFases > 100) {
        fasesPntsSup += 1;
    }
}
if (numFases > 0) {
        mediaPontos = pontuaçãoTotal / numFases;
}
    
alert(`
    Resumo do Jogo
        Pontuação Total: ${pontuaçãoTotal}
        Média de Pontos por Fase: ${mediaPontos.toFixed(2)}
        Quantidade de Fases com pontuação acima de 100: ${fasesPntsSup}
    `)