//Criação de objeto dentro de objeto eobjeto dentro de arrays

const pessoa = {
    dados: [
        {
            nome: 'Rick',
            idade: 70+' anos'// + operador de concatenação
        },
        {
            altura: 1.96,
            peso: 86+' kg'
        }
    ]
}

console.log(`Nome da pessoa: ${pessoa.dados[0].nome}`);// dados é um objeto com array dentro
console.log(`Nome da pessoa: ${pessoa.dados[0].idade}`);
console.log(`Nome da pessoa: ${pessoa.dados[1].altura}`);
console.log(`Nome da pessoa: ${pessoa.dados[1].peso}`);