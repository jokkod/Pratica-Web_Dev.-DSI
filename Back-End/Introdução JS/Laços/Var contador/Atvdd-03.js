/* Exercício 2 — Sistema de Carrinho de Compras
Simule um carrinho de compras de um e-commerce.
O programa deve:
•	Ler a quantidade de produtos comprados 
•	Para cada produto: 
o	Nome 
o	Preço 
o	Quantidade 
•	Calcular: 
o	Valor total da compra 
o	Quantos produtos custam mais de R$100 
o	Produto mais caro */

let nmProduto = "";
let valorProduto = 0;
let valorTotal = 0;
let prodValorSup = 0;
let valorMaisCaro = 0;

for (let i = 1; i <= 3; i++) {
    nmProduto = prompt(`Digite o nome do ${i}º produto:`);

    valorProduto = +prompt(`Digite o valor do ${i}º produto:`);
    valorTotal += valorProduto;

    if (valorProduto > 100) {
        prodValorSup += 1;
    }

    if (valorProduto > 0) {
        valorMaisCaro = valorProduto;
    }
}
alert(`
    Valor Total da Compra: ${valorTotal}
    Quantidade de Produtos Acima de R$100: ${prodValorSup}
    Valor do Produto Mais Caro: ${valorMaisCaro}
    `)