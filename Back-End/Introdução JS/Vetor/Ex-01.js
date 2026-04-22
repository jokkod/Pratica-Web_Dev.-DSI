let dadosPessoa = ["Davy Jones", 38, 1.80, "O mago", "Pegar todos os Pal"];

console.log(`
Dados da Pessoa:
    Nome Pessoa: ${dadosPessoa[0]}
    Idade Pessoa: ${dadosPessoa[1]}
    Altura Pessoa: ${dadosPessoa[2]}
    Título Pessoa: ${dadosPessoa[3]}
    Conquista Pessoa: ${dadosPessoa[4]}
    `);

/* Inserindo valores no final do array:
 .push(): insere novo dado no final do Array;
 .join(): muda formato do Array.
 */
console.log(`------------------------`);
dadosPessoa.push("Games Eduu");
console.log(dadosPessoa.join("\n"));

/* Inserindo valores no início do array:
.unshift(): adiciona item no início do array;
.join(): muda formato do Array.
*/
console.log(`------------------------`);
dadosPessoa.unshift("Thais");
console.log(dadosPessoa.join("\n"));

/* Inserindo novo elemento em uma posição específica:
Usa-se método .splice()
*/
dadosPessoa.splice(1, 2, "Davy Jones: O Maior Fan");
console.log(`------------------------`);
console.log(dadosPessoa.join("\n"));

/* Excluindo último dado do Array: 
Usa-se método .pop() 
*/
dadosPessoa.pop();
console.log(`------------------------`);
console.log(dadosPessoa.join("\n"));

/* Excluindo primeiro dado do Array: 
Usa-se método .shift() 
*/
dadosPessoa.shift();
console.log(`------------------------`);
console.log(dadosPessoa.join("\n"));

/* Excluindo elemento em uma posição específica:
Usa-se método .splice() com 2 elementos= 
inicial e quantdd de elementos à serem apagados
*/
dadosPessoa.splice(2,2);
console.log(`------------------------`);
console.log(dadosPessoa.join("\n"));





