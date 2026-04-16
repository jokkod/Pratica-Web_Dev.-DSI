let notaAluno;
let nomeAluno;

do {
    alert(`
        ---SEJA BEM VINDO AO SISTEMA DE REGISTRO!---\n
        Digite Corretamente o Nome e Nota do Aluno
        `)
    nomeAluno = prompt(`
        Digite o nome do Aluno:
        `);
    notaAluno = +prompt(`
        Digite a nota do Aluno:
        `);

    if (!isNaN(NotasAluno) || NotasAluno <= 10 || parseInt(NotasAluno) >= 0) {
        alert(`
            ----- Resultado do Registro de Aluno -----\n
            REGISTRO REALIZADO COM SUCESSO!
            Aluno: ${nomeAluno}
            Nota Final: ${notaAluno}
            `);
    } else {
        alert(`
            ----- Resultado do Registro de Aluno -----\n
            REGISTRO INVÁLIDO! Digite uma nota entre 0 e 10.
            `);
    }
} while (NotasAluno != 10);