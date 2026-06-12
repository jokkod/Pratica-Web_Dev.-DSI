const readline = require('readline')
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const temNumero = /\d/
const temEspecial = /[^A-Za-z0-9]/
console.log("BEM VINDO AO VERIFICADOR DE SENHAS!");

rl.question("Digite uma senha para ocorrer sua verificação de força: ", (senha) => { 
if(senha.length >= 8 && temNumero.test(senha) && temEspecial.test(senha))
    {console.log("Sua senha é forte!");    
} else if(senha.length >= 8 && temNumero.test(senha))
    {console.log("Sua senha é média!");
} else{console.log("Sua senha é fraca!");
}
rl.close();
});