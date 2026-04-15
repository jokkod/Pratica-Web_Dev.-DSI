/* Sistema de Carrinho de Compras
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
let quantCompras = 0;
let quantProduto = 1;
let valorTotal = 0;
let prodValorSup = 0;
let valorMaisCaro = 0;
let nmProdMaisCaro = "";

alert(`Sistema de Carrinho de Compras
        Informe as informações de seu carrinho de compras
    `)

quantCompras = +prompt(`Digite quantos produtos pretende comprar:`)
for (let i = 1; i <= quantCompras; i++) {
    nmProduto = prompt(`Digite o nome do ${i}º produto:`);

    valorProduto = +prompt(`Digite o valor do ${i}º produto:`);
    quantProduto = +prompt(`Informe as unidades compradas do produto:`);
    valorTotal += valorProduto * quantProduto;

    if (valorProduto > 100) {
        prodValorSup += 1;
    }

    if (valorProduto > valorMaisCaro) {
        valorMaisCaro = valorProduto;
        nmProdMaisCaro = nmProduto;
    }
}
alert(`
    Quantidade de Produtos Comprados: ${quantCompras} produtos
    Valor Total da Compra: ${valorTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
    Quantidade de Produtos Acima de R$100: ${prodValorSup} produtos
    Produto Mais Caro: ${nmProdMaisCaro} (${valorMaisCaro.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})})
    `)