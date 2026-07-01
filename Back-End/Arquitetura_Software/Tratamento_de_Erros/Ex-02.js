while (true) {
    alert(`--- VERIFICADOR DE IDADE ---`);
    let idade = +prompt("Informe sua idade");
    try {
        if (idade < 18 && idade > 0) {
            throw new Error(`Idade mínima é 18 anos!`);
        } else if (idade <= 0) {
            throw new Error(`Digite um número válido!`);
        } else {
            alert(`Acesso liberado!`);
            break;
        }
    } catch (error) {
        console.log(`Nome do Erro: ${error.name}`);
        alert(`Mensagem de Erro: ${error.message}`);
    }
}