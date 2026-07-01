try {
    //Passamos trecho de código que queremos verificar possível erro
    let nome = "Seiya"
    console.log(nome);
    console.log(idade);
} catch (error) {
    console.log("Erro Encontrado");
    // Tipo de Erro
    console.log(`Tipo de Erro: ${error.name}`);
    // O que deu erro
    console.log("Mensagem de Erro: " + error.message);
    // Local do arquivo onde ocorreu erro
    console.log("Caminho do erro: " + error.stack);
}