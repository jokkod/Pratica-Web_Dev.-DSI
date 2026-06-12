let contador = 1;
let nmNovoAluno = "";
let anoMatricula = 0;
let codMatricula = 0;

alert(`--- Sistema de Cadastro da Academia ---\n
    Preencha os dados necessários para o cadastro.
    `)
while (contador <= 10) {
    nmNovoAluno = prompt(`Insira seu Nome:`);
    anoMatricula = prompt(`Insira os dois últimos digitos de seu ano de ingresso:`);

    if (nmNovoAluno && anoMatricula && anoMatricula.length === 2 && !isNaN(anoMatricula) && parseInt(anoMatricula) > 0) {
        let sufixo = contador.toString().padStart(2, '0');
        codMatricula = anoMatricula + sufixo;
        contador++
        alert(`
            --- Cadastro Feito Com Sucesso ---\n
            Aluno: ${nmNovoAluno}\n
            Seu código de Inscrição é: ${codMatricula}
            `)
    } else {
        alert(`ERRO: Insira nomes e dígitos válidos.`);
        break;
    }
}
alert(`Sistema Encerrado!`)