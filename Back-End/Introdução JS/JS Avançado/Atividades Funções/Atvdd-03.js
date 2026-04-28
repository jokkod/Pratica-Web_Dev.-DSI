function votar(Escolha) {
    alert(`
        Inicializando votação...\n
        Vote em Seu Candidato Favorito por meio de seu número.
        `);

    let Escolha = Number(prompt(`
        --- CANDIDATOS ELEGÍVEIS ---\n
        1- Candidato A
        2- Candidato B
        3- Candidato C
        4- Voto em Branco
        \n-----------------------------\n
        DIGITE O NÚMERO DO CANDIDATO DESEJADO:
        `));

    switch(Escolha) {
        case 1: 
        alert(`
            Candidato A recebeu seu Voto.\n
            Voto Confirmado com sucesso!
            `);
        case 2: 
        alert(`
            Candidato B recebeu seu Voto.\n
            Voto Confirmado com sucesso!
            `);
        case 3: 
        alert(`
            Candidato C recebeu seu Voto.\n
            Voto Confirmado com sucesso!
            `);
        case 4:
        alert(`
            Voto em branco confirmado com sucesso!
            `);
    }
}

function exibirResult() {
    alert(`
        Inicializando Exibição de Resultado da Votação...
        `);
}