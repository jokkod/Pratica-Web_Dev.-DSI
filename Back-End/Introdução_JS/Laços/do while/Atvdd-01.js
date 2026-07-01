let opcoes;

do {
    opçoes = +prompt(`
            Menu de Produtos:
        1 - Cadastrar novo produto
        2 - Listar produtos
        3 - Alterar produto
        4 - Excluir 
        5 - Sair
        `);

    if (opcoes == 1) {
        alert(`Opção Escolhida:
        Cadastrar novo produto
        `);
    } else if (opcoes == 2) {
        alert(`Opção Escolhida:
        Listar produtos
        `);
    } else if (opcoes == 3) {
        alert(`Opção Escolhida:
        Alterar produto
        `);
    } else if (opcoes == 4) {
        alert(`Opção Escolhida:
        Excluir
        `);
    } else if (opcoes == 5) {
        alert(`Opção Escolhida:
        Sair
        `);
    } else {
        alert(`Opção Inválida!`);
    }
} while (opcoes != 5);