const btnAddProduct = document.querySelector('.btn-product');
const form = document.querySelector('.container');
const spaceElement = document.querySelector('.campo');
const nome = document.querySelector('#nome');
const categoria = document.querySelector('#categoria');
const preco = document.querySelector('#preco');
const estoque = document.querySelector('#estoque');
const codigo = document.querySelector('#codigo');
const btnSubmit = document.querySelector('button[type="submit"]');
const listItens = document.querySelector('#list-product');

btnAddProduct.addEventListener("click", () => {
    form.classList.toggle('ativo');
    if (form.classList.contains('ativo')) {
        btnAddProduct.innerText = 'Ocultar Cadastro';
    } else {
        btnAddProduct.innerText = 'Cadastrar Produto';
    }
});

const codigosCadastrados = new Set();

class DescricaoProduto {
    constructor(nome, categoria, preco, estoque, codigo) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.estoque = estoque;
        this.codigo = codigo;
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
        if (this.nome.trim() === "") {
            throw new Error(`ERRO! O nome do produto não pode ser vazio`);
        }
    }

    validarCaracterNome() {
        if (this.nome.trim().length < 2) {
            throw new Error(`ERRO! O nome do produto tem de possuir no mínimo 2 letras`);
        }
    }

    validarCategoria() {
        if (this.categoria.trim() === "") {
            throw new Error(`ERRO! Nenhuma categoria foi cadastrada.`);
        }
    }

    validarPreco() {
        const precoNum = parseFloat(this.preco.replace(',', '.'));
        if (isNaN(precoNum) ||this.preco.length < 0) {
            throw new Error(`ERRO! Você não pode ter o preço menor ou igual à 0.`);
        }
        this.preco = precoNum;
    }

    validarEstoque() {
        const estoqueNum = parseInt(this.estoque);
        if (isNaN(estoqueNum) || estoqueNum < 0 || this.estoque.trim() === "") {
            throw new Error(`ERRO! Estoque precisa existir.`);
        }
    }

    validarCodigo() {
        if (this.codigo.trim() === "") {
            throw new Error(`ERRO! Produto precisa ter um código id.`);
        }
    }

    validarCodigoUnico() {
        if (codigosCadastrados.has(this.codigo)) {
            throw new Error(`ERRO! O código ${this.codigo} já está cadastrado em outro produto.`);
        }
    }

    validarCaracterCodigo() {
        const regexApenasNumeros = /^[0-9]+$/;
        if (!regexApenasNumeros.test(this.codigo)) {
            throw new Error(`ERRO! O código deve conter apenas números.`);
        }
        if (this.codigo.length !== 5) {
            throw new Error(`ERRO! Código precisa ter cinco caracteres.`);
        }
        // Preciso cadastrar produtos com códigos diferentes, nunca iguais
    }

    validation() {
        this.validarNome();
        this.validarCaracterNome();
        this.validarCategoria();
        this.validarPreco();
        this.validarEstoque();
        this.validarCodigo();
        this.validarCodigoUnico();
        this.validarCaracterCodigo();
    }
}

btnSubmit.addEventListener('click', (event) => {
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
        codigosCadastrados.add(produto.codigo);
        alert("Produto cadastrado com Sucesso!");

        const liOl = document.createElement('li');
        liOl.innerText = 'Produto Cadastrado';

        const ul = document.createElement('ul');
        const liUlNome = document.createElement('li');
        liUlNome.innerText = `Nome: ${produto.nome}`;

        const liUlCategoria = document.createElement('li');
        liUlCategoria.innerText = `Categoria: ${produto.categoria}`;

        const liUlPreco = document.createElement('li');
        liUlPreco.innerText = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const liUlEstoque = document.createElement('li');
        liUlEstoque.innerText = `Estoque: ${produto.estoque}`;

        const liUlCodigo = document.createElement('li');
        liUlCodigo.innerText = `Codigo: ${produto.codigo}`;

        ul.append(
            liUlNome,
            liUlCategoria,
            liUlPreco,
            liUlEstoque,
            liUlCodigo
        );

        listItens.append(liOl, ul);
        document.querySelector('form').reset();
    } catch (error) {
        alert(`Mensagem: ${error.message}`);
    }
});