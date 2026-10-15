/* 1. Determine se a lasanha está pronta
Quando você tem lasanha no forno, você quer saber se já pode tirá-la ou não. Para garantir que a lasanha não queime no forno, você normalmente define um timer. Mas às vezes você esquece disso.

Escreva uma função cookingStatus que recebe como parâmetro o tempo restante no timer em minutos. A função tem três resultados possíveis.

Se o timer mostrar 0, ela deve retornar 'Lasagna is done.'.
Se o timer mostrar qualquer outro número, o resultado deve ser 'Not done, please wait.'.
Se a função for chamada sem um valor de timer, o resultado deve ser 'You forgot to set the timer.'.
O timer nunca vai mostrar um valor abaixo de 0. */
alert("Abrindo Sistema de Timer")
function CookingTimer(t) {
    let tempo = prompt("Digite o tempo que resta no timer da sua receita:");
    tempo = t;


    if (t === "0") {
        const alerta = alert(`Lasagna is done.`);
        return alerta;
    } else if (t !== isNaN && t !== "0") {
        const alerta = alert(`Not done, please wait.`);
        return alerta;
    } else {
        const alerta = alert(`You forgot to set the timer.`);
        return alerta;
    }
}

CookingTimer();