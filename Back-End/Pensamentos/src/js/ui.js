import app from "./api.js";

const ui = {

    async renderizaPensamentos() {
        const ulPensamentos = document.getElementById('lista-pensamentos')
        ulPensamentos.innerHTML = "" // Para não dar o erro de duplicação do conteúdo 

        try {
            const requitaPensamentos = await app.requisitarApi()
            requitaPensamentos.forEach(ui.addPensamento)
        } catch (error) {
            alert('Erro ao requisitar pensamentos.')
            console.log(error.message)
        }

    },

    async preencheForm(pensamentoId) {
        const pensamento = await app.buscarRegistro(pensamentoId)
        document.getElementById('pensamento-id').value = pensamento.id
        document.getElementById('pensamento-conteudo').value = pensamento.conteudo
        document.getElementById('pensamento-autoria').value = pensamento.autoria
    },

    addPensamento(pensamento) {
        const ulPensamentos = document.getElementById('lista-pensamentos');

        const li = document.createElement('li')
        li.setAttribute('data-id', pensamento.id)
        li.classList.add('li-pensamento')

        const pensamentoConteudo = document.createElement('div')
        pensamentoConteudo.innerText = pensamento.conteudo
        pensamentoConteudo.classList.add('pensamento-conteudo')

        const autoriaConteudo = document.createElement('div')
        autoriaConteudo.innerText = pensamento.autoria
        autoriaConteudo.classList.add('pensamento-autoria')

        // Criando button edit
        const buttonEdit = document.createElement('button')
        buttonEdit.classList.add('botao-editar')
        buttonEdit.onclick = () => ui.preencheForm(pensamento.id)

        const iconEdit = document.createElement('img')
        iconEdit.src = 'src/assets/imagens/icone-editar.png'
        iconEdit.alt = 'Ícone de Editar'
        buttonEdit.appendChild(iconEdit)

        // Criando button delete
        const buttonDelete = document.createElement('button')
        buttonDelete.classList.add('botao-excluir')
        buttonDelete.onclick = async () => {
            try {
                await app.deleteRegistro(pensamento.id)
                ui.renderizaPensamentos()
            } catch (error) {
                alert("Erro ao deletar pensamento.")
            }
        }

        const iconDelete = document.createElement('img')
        iconDelete.src = 'src/assets/imagens/icone-excluir.png'
        iconDelete.alt = 'Ícone Excluir'
        buttonDelete.appendChild(iconDelete)

        const divButtonIcon = document.createElement('div')
        divButtonIcon.classList.add('icones')
        divButtonIcon.append(buttonEdit, buttonDelete)

        li.append(pensamentoConteudo, autoriaConteudo, divButtonIcon)
        ulPensamentos.appendChild(li)
    }
}

export default ui;