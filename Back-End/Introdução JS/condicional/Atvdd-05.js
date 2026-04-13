/* clientes comuns: sem desconto aplicável;
funcionários: 10% de desconto;
clientes vip: 5% dd desconto. */
let ValorCompra = +prompt(`
    Informe o valor da compra:
    `)

let categConsumidor = +prompt(`
    Informe sua categoria de cliente pelo respectivo número:
        1- Cliente comum
        2- Funcionário
        3- Clientes Vip
    `)

switch(categConsumidor){
    case 1:
        alert(`O preço final de sua conta é: R$ ${categCompra}`)
        break;

    case 2:
        let DescAplicado1 = (ValorCompra * 0.1);
        let DescFinal1 = (ValorCompra - DescAplicado1);
        alert(`O preço final de sua conta com desconto aplicado é: 
                R$ ${DescFinal1}`)
        break;

    case 3:
        let DescAplicado2 = (ValorCompra * 0.05);
        let DescFinal2 = (ValorCompra - DescAplicado2);
        alert(`O preço final de sua conta com desconto aplicado é: 
                R$ ${DescFinal2}`);
        break;
    default:
        alert(`Insira um número válido entre os valores disponíveis.`)
}