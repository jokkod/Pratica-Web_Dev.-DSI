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

    if (!isNaN(notaAluno) && notaAluno && parseInt(notaAluno) >= 0 && parseInt(notaAluno) <= 0 && nomeAluno ) {
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
} while (notaAluno >= 0 && notaAluno <= 10);