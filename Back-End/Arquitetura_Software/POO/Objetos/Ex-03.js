// Método dentro de objeto literal(Função sem retorno)
// Obs.: Se utiliza-se arrow function this não seria aceito, logo não seria mostrado valor
const carro = {
    modelo: 'Camaro',
    marca: 'Chevrolet',
    ano: '1966',

    dadosCompletos: function () {
        console.log(`
            Dados do Veículo1:
            - Modelo: ${this.modelo}
            - Marca: ${this.marca}
            - Ano: ${this.ano}
            `);
    }
}

carro.dadosCompletos();

//Função com retorno

const carro2 = {
    modelo: 'Skyline GTR-R34',
    marca: 'Nissan',
    ano: 1999,
    dadosCompletos: function () {
        return `
            Dados do Veículo2:
            - Modelo: ${this.modelo}
            - Marca: ${this.marca}
            - Ano: ${this.ano}
    `
    }
}

console.log(carro2.dadosCompletos());