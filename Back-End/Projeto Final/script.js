const dadosWeb = document.querySelectorAll('.web__item')
const ul = document.querySelector('.right__ul');
const btnCadastro = document.querySelector('.btn-primary');
const listaTabela = [];

btnCadastro.addEventListener()('click', event => {
    event.preventDefault();

    dadosWeb.forEach((itensWeb), (index) => {
        itensWeb.dataset.lista
    });
});

/* Passos: Criar Objeto temporário para agrupar os dados desta "rodada" de validação;
           Percorrer o forEach, fazendo dentro dele captura de elementoespecífico com operador terciário;
           Fazer validação e dentro do if de validação pegar chave identificadora dentro;
           Faz verificação de existência de lenght para incluir ao array principal;
           Atualiza Interface;
           Transforma array em string JSON; 
           E Após isso adiciona no LocalStorage.
*/
