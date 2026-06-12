let valores = [13,-7,33,-14,-2,21,17,8,-2,1];
var somaDosPares = 0;
var contadorImpares= 0;

for(let i=0; i< valores.length; i++){

    if( valores[i] % 2 === 0){
        somaDosPares += valores[i];
    }else{ 
        contadorImpares++;
    }
}
console.log("Soma dos Pares:"+ somaDosPares);
console.log("Contador de Ímpares:"+ contadorImpares);

var maiorNumero = Math.max(... valores);
console.log("Maior Número: "+ maiorNumero);
var menorNumero = Math.min(... valores);
console.log("Menor Número: "+ menorNumero);
