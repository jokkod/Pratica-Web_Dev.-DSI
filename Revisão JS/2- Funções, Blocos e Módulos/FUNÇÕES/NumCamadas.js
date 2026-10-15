/* 2. Estime o tempo de preparo
Para a próxima lasanha que você vai preparar, você quer garantir que tem tempo suficiente reservado para poder curtir o cozimento. 
Você já fez um plano com todas as camadas que sua lasanha vai ter. 
Agora você quer estimar quanto tempo o preparo vai levar com base nisso.

Implemente uma função preparationTime que recebe um array de camadas e o tempo médio de preparo por camada em minutos. 
A função deve retornar a estimativa do tempo total de preparo com base no número de camadas. 
Se a função for chamada sem fornecer o tempo médio de preparo, deve-se assumir 2 minutos. */
alert(`Sistema de Cálculo Timer por Camadas de Lasanha\n
    ---Digite o nome ou sabor de sua camada ----`);
function calculationTime(t) {
    const layers = [];
    const ls = parseInt(prompt(`Digite quantas camadas deseja em sua lasanha:`));
    for (let i = 1; i < ls; i++) {
        const camadas = prompt(`Digite o nome de sua ${i}ª camada:`);
        layers.push(camadas)
    }
    if (ls === "0" || ls === isNaN()) {
        alert(`Tempo Espera: 2 min`)
    } else {
        t = 3;
        const result = ls * t;
        alert(`Tempo Esperado: ${result} min`)
    }
}

calculationTime();