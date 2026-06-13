const nome = prompt(`Defina um nome:`);
const idade = prompt(`Defina uma idade:`);

class Pessoa {
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa(nome, idade);
alert(`Nome: ${pessoa1.nome}\nIdade: ${pessoa1.idade}`);