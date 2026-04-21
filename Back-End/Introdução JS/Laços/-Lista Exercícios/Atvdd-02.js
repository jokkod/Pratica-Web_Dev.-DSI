let senhaDigitada;
let confirmSenha;

alert(`
    --- Bem vindo ao Centro de Cadastro de Senha ---
    `);

while (senhaDigitada !== null || senhaDigitada.trim() !== "") {
    senhaDigitada = prompt(`
    Digite sua senha (com no mínimo 8 dígitos):  
    `);

    if (senhaDigitada !== null && senhaDigitada.length >= 8) {

        alert(`
            A senha que você digitou foi: \n
            ${senhaDigitada}
            `);
        
        break;
    } else {
            alert(`
            Digite uma senha aceitável de no mínimo 8 dígitos!
            `);
    }
}