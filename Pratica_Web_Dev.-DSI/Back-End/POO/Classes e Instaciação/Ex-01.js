// Declara classe com objeto
class Carro {
    constructor(modelo, marca, ano) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    dadosCarros() {
        // Cria método de exibição de atributos do objeto Carro
        console.log(`
            Dados do Veículo: 
                Modelo: ${this.modelo}
                Marca: ${this.marca}
                Cor: ${this.ano}
            `);
    }

    // Cria método de ação do objeto Carro
    ligar(ligado) {
        if (ligado === 'sim' || ligado === 'Sim' || ligado === 'SIM') {
            console.log(`Carro Ligado!`);
        } else if ( ligado === 'não' || ligado === 'Não' || ligado === 'NÃO'){
            console.log(`Carro Desligado!`)
        }
    }
}
// Instanciação do objeto Carro por meio new
const primeiroCarro = new Carro('Mustang', 'Ford', '1965');
const segundoCarro = new Carro('Huracán', 'Lamborghini', '2014')
primeiroCarro.dadosCarros();
primeiroCarro.ligar('Não');
console.log("\n------------------------------------------------");
segundoCarro.dadosCarros();
segundoCarro.ligar('Sim');