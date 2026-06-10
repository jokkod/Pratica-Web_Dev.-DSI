const btnAddProduct = document.querySelector('.btn-product');
const form = document.querySelector('.container');
const spaceElement = document.querySelector('.campo');
const nome = document.querySelector('#nome');
const categoria = document.querySelector('#categoria');
const preco = document.querySelector('#preco');
const estoque = document.querySelector('#estoque');
const codigo = document.querySelector('#codigo');
const btnSubmit = document.querySelector('input[type="submit"]');
const listItens = document.querySelector('#list-product');

btnAddProduct.addEventListener("click", () => {
    form.classList.toggle('ativo');
    if(form.classList.contains('ativo')) {
        btnAddProduct.innerText = 'Ocultar Cadastro';
    } else {
        btnAddProduct.innerText = 'Cadastrar Produto';
    }
});

class DescricaoProduto {
    constructor(nome, categoria, preco, estoque, codigo) {
        this.nome = String(nome);
        this.categoria = String(categoria);
        this.preco = parseFloat(preco);
        this.estoque = parseInt(estoque) || 0;
        this.codigo = parseInt(codigo);
    }

    // Validar o nome = não pode estar vazio
    // Validar o nome = qtdd de caracteres
    // Validar a categoria = não pode estar vazio 
    // Validar o preco = não pode ser 0 ou menor que 0
    // Validar o estoque = não pode ser menor que 0
    // Validar o codigo = não pode estar vazio
    // Validar o codigo = qtdd de caracteres
    // Validacao campo numérico apenas com números

    validarNome() {
        /* if(this.nome.length <= 0) */
        if(this.nome.trim() === "") {
            throw new Error(`ERRO! Nenhum nome de produto foi cadastrado.`);
        }
    }

    validarCaracterNome() {
        if(this.nome.length < 2) {
            throw new Error(`ERRO! O nome do produto tem de possuir no mínimo 2 letras`);
        }
    }

    validarCategoria() {
        if(this.categoria.trim() === "") {
            throw new Error(`ERRO! Nenhuma categoria foi cadastrada.`);
        }
    }

    validarPreco() {
        if(this.preco < 0) {
            throw new Error(`ERRO! Você não pode ter o preço menor ou igual à 0.`);
        }
    }

    validarEstoque() {
        if(this.estoque <= 0) {
            throw new Error(`ERRO! Estoque precisa existir.`);
        }
    }

    validarCodigo() {
        if(this.codigo.trim() === "") {
            throw new Error(`ERRO! Produto precisa ter um código id.`);
        }
    }

    validarCaracterCodigo() {
        if(this.codigo !== 5) {
            throw new Error(`ERRO! Código precisa ter cinco caracteres.`);
        }
        // Preciso cadastrar produtos com códigos diferentes, nunca iguais
    }

    validation() {
        this.validarNome()
        this.validarCaracterNome()
        this.validarCategoria()
        this.validarPreco()
        this.validarEstoque()
        this.validarCodigo()
        this.validarCaracterCodigo()
    }

}

btnSubmit.addEventListener('click', (event)=> {
    event.preventDefault();

    try {
        const produto = new DescricaoProduto(
            nome.value,
            categoria.value,
            preco.value,
            estoque.value,
            codigo.value
        );

        produto.validation();
        alert("Produto cadastrado com Sucesso!");

        const liOl = document.createElement('li');
        liOl.innerText = 'Produto Cadastrado';

        const ul = document.createElement('ul');
        const liUlNome = document.createElement('li');
        liUlNome.innerText = `Nome: ${produto.nome}`;

        const liUlCategoria = document.createElement('li');
        liUlCategoria.innerText = `Categoria: ${produto.categoria}`;

        const liUlEstoque = document.createElement('li');
        liUlEstoque.innerText = `Estoque: ${produto.estoque}`;

        const liUlCodigo = document.createElement('li');
        liUlCodigo.innerText = `Codigo: ${produto.codigo}`;
        
        ul.append(
            liUlNome, 
            liUlCategoria, 
            liUlEstoque, 
            liUlCodigo
        );

        listItens.append(liOl, ul);
        form.reset();
    } catch (error) {
        alert(`Mensagem: ${error.message}`);
    }
});