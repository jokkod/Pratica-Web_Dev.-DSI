const dadosWeb = document.querySelectorAll('.web__item')
const inputNome = document.querySelector('#web__inicial-input');
const ul = document.querySelector('.right__ul');
const btnCadastro = document.querySelector('.btn-primary');
const mnsgAviso = document.querySelector('.last-text');

let listaTabela = JSON.parse(localStorage.getItem('cadastros')) || [];

renderizarLista();

inputNome.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^A-Za-zÀ-ÿ\s]/g, "");
});

function capitalizarNome(nome) {
    const partesNome = nome.toLowerCase().split(' ');
    const nomeFormatado = [];

    for (const palavra of partesNome) {
        if (palavra.length > 0) {
            const palavraForm = palavra.charAt(0).toUpperCase() + palavra.slice(1);
            nomeFormatado.push(palavraForm);
        }
    }
    return nomeFormatado.join(' ');
}

function renderizarLista() {
    ul.innerText = "";

    listaTabela.forEach((cadastro, index) => {
        const li = document.createElement('li');
        li.style.marginBottom = '0.15rem';
        li.style.marginLeft = '1.5rem';

        const dadosExibicao = [];
        for (const chave in cadastro) {
            if (chave !== 'idCadastro') {
                dadosExibicao.push(cadastro[chave]);
            }
        }

        const textoCadastro = Object.values(cadastro).join(' | ');
        li.textContent = textoCadastro;
        const btnRemover = document.createElement('button');
        btnRemover.type = 'button';
        btnRemover.textContent = 'Remover';
        btnRemover.style.marginLeft = '0.7rem';
        btnRemover.style.backgroundColor = '#ea6752';
        btnRemover.style.color = '#ffffff';
        btnRemover.style.border = 'none';
        btnRemover.style.padding = '0.1rem 0.5rem';
        btnRemover.style.borderRadius = '1rem';
        btnRemover.style.cursor = 'pointer';

        btnRemover.addEventListener('click', () => {
            removerCadastro(index);
        });

        li.appendChild(btnRemover);
        ul.appendChild(li);
    });
}

function removerCadastro(index) {
    listaTabela.splice(index, 1);
    localStorage.setItem('cadastros',
        JSON.stringify(listaTabela));
    renderizarLista();
}

btnCadastro.addEventListener('click', event => {
    event.preventDefault();
    if (listaTabela.length >= 12) {
        mnsgAviso.innerHTML = `Limite de 12 cadastros atingido!`;
        mnsgAviso.style.color = '#ff2c2c';
        return;
    }
    const itensCadastro = {};
    let formValido = true;

    dadosWeb.forEach((itensWeb, index) => {
        if (itensWeb.disabled) return;

        const tag = itensWeb.tagName.toLowerCase();
        const typeItens = itensWeb.type;
        const id_name = itensWeb.id || itensWeb.name || `campo_${index}`;

        if (typeItens == 'radio') {
            if (itensWeb.checked) {
                itensCadastro[id_name] = itensWeb.value;
            }
        } else if (tag === 'select' || tag === 'input') {
            if (!itensWeb.value.trim() || !itensWeb.checkValidity()) {
                formValido = false;
                itensWeb.classList.add('erro');
            } else {
                itensWeb.classList.remove('erro');
            }
            if (itensWeb.id === 'web__inicial-input') {
                itensCadastro[id_name] = capitalizarNome(itensWeb.value);
            } else {
                itensCadastro[id_name] = itensWeb.value;
            }
        }
    });

    if (!formValido) {
        mnsgAviso.innerHTML = `Por favor, preencha os Campos Corretamente!`
        mnsgAviso.style.color = '#ff2c2c';
        return;
    }

    itensCadastro.idCadastro = Date.now();

    listaTabela.push(itensCadastro);
    localStorage.setItem('cadastros', JSON.stringify(listaTabela));

    mnsgAviso.innerHTML = "Cadastro realizado com sucesso!";
    mnsgAviso.style.color = "#2b802b";

    renderizarLista();
    dadosWeb.forEach(item => {
        if (item.type === 'radio') {
            item.checked = false;
        } else if (item.tagName.toLowerCase() === 'select') {
            item.selectedIndex = 0;
        } else {
            item.value = "";
        }
    })
    renderizarLista();
});