/* A função aceita 1 parâmetro: n . N representa a quantidade de cachorros-quentes que o cliente deseja comprar. 
Cada quantidade diferente de cachorros-quentes tem um preço diferente (ver tabela abaixo). 
A função retorna o valor total que o cliente terá que pagar para comprar essa quantidade de cachorros-quentes (sendo preço p/ unidades em centavos). */
/* Tabela: n < 5 === 90
           n >= 5 && < 10 === 95
           n >= 10 === 100
*/
let continuar = true

function HotDogsPrice() {
    let un = Number(prompt(`Digite quantas unidades de cachorros quentes deseja comprar:`));

    return un < 5 && un > 0 ? alert("Seu(s) lanche(s) custou(custaram) 90 reais.") :
            un >= 5 && un < 10 ? alert("Seus cachorros quentes custaram 95.") :
            un >= 10 ? alert("Seus lanches custaram 100 reais.") : 
            alert("Você não comprou nem uma unidade do lanche!");
}

while(continuar === true) {
    alert(`Iniciando sistema de compra de cachorros quentes...`);

    HotDogsPrice();
    
    continuar = prompt(`Deseja continuar a compra?`);
    if (continuar === "S" | continuar === "s" | continuar === "sim" || continuar === "Sim" || continuar === "SIM") {
        continuar = true
    } else if (continuar === "N" | continuar === "n" | continuar === "não" || continuar === "Não" || continuar === "Nao" || continuar === "nao") {
        continuar = false
        alert("Encerrando o sistema. Até logo!");
    } 
}