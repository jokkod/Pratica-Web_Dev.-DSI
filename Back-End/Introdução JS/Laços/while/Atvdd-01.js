let nmNovoAluno = "";
let anoMatricula = 1;

codMatricula = 0;

if (anoMatricula != isNaN || nmNovoAluno != null) {
    while (anoMatricula <= 10) {
        nmNovoAluno = prompt(`Insira seu Nome:`);
        anoMatricula = prompt(`Insira os dois últimos digitos de seu ano de ingresso:`);
        codMatricula = anoMatricula++;
    }
    alert(`${nmNovoAluno}`);
    alert(`${codMatricula}`);
} else {
    alert(`ERRO: Insira nomes e dígitos válidos.`);
}