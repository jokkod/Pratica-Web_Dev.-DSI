import app from "./api.js";

const ui = {

    async renderizarPensamentos() {
        const ulPensamentos = document.getElementById('lista-pensamentos');
        ulPensamentos.innerHTML = ""; // Para não dar erro de duplicação de conteúdo

        try {
            const requisitarApi = await app.requisitarApi();
            requisitarApi.forEach(pensamento => {
                ui.addPensamento(pensamento);
            });
        } catch (error) {
            alert('Erro ao requisitar pensamento');
            console.log(error.name);
        }

    },

    async preencheForm(pensamentoId) {
        const pensamento = await app.buscarRegistro(pensamentoId);
        document.getElementById('pensamento-id').value = pensamento.id;
        document.getElementById('pensamento-conteudo').value = pensamento.conteudo;
        document.getElementById('pensamento-autoria').value = pensamento.autoria;
    },

    addPensamento(pensamento) {
        // Criação do elemento lista
        const ulPensamentos = document.getElementById('lista-pensamentos');

        // Criação do espaço p/ elementos da lista
        const li = document.createElement('li');
        li.setAttribute('data-id', pensamento.id);
        li.classList.add('li-pensamento');

        // Criação do elemento pensamento da lista
        const pensamentoConteudo = document.createElement('div');
        pensamentoConteudo.innerText = pensamento.conteudo;
        pensamentoConteudo.classList.add('pensamento-conteudo');

        // Criação do elemento autoria da lista
        const autoriaConteudo = document.createElement('div');
        autoriaConteudo.innerText = pensamento.autoria;
        autoriaConteudo.classList.add('pensamento-autoria');

        // Criando button edit
        const buttonEdit = document.createElement('button');
        buttonEdit.classList.add('botao-editar');
        buttonEdit.onclick = () => ui.preencheForm(pensamento.id);

        // Criando ícone de edição
        const iconEdit = document.createElement('img');
        iconEdit.src = 'src/assets/imagens/icone-editar.png';
        buttonEdit.alt = 'Ícone de Editar';
        buttonEdit.appendChild(iconEdit);

        // Criando button delete
        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('botao-excluir');
        //Falta função de deletar

        const iconDelete = document.createElement('img');
        iconDelete.src = 'src/assets/imagens/icone-excluir.png';
        buttonDelete.alt = 'Ícone de Excluir';
        buttonDelete.appendChild(iconDelete);

        const divButtonIcon = document.createElement('div');
        divButtonIcon.classList.add('icones');
        divButtonIcon.append(buttonEdit, buttonDelete);

        li.append(pensamentoConteudo, autoriaConteudo, divButtonIcon);
        ulPensamentos.appendChild(li);
    }
}

export default ui;