// Declaração de objetos com atributos e seus valores
const pessoa = {
    nome: 'Ryu',
    'idade da pessoa': 55,//objeto armazenado em uma variável e com espaços ou caracteres especiais exigem notação colchetes
    'golpes da pessoa': ['Hadouken', 'Shoryuken', 'Hurricane Kick'],
    Zoner: false
}

console.log(`Nome da pessoa: ${pessoa.nome}`);
console.log(`Idade da pessoa: ${pessoa['idade da pessoa']}`);
/* console.log(`Primeiro Golpe: ${pessoa.golpes[0]}`); */
console.log(`Segundo Golpe: ${pessoa['golpes da pessoa'][1]}`);
console.log(`Novo Poder: ${pessoa['golpes da pessoa'].push('Fire Hadouken')}`);// Com uso do método de array .push
console.log(pessoa['golpes da pessoa'].join('\n'));

