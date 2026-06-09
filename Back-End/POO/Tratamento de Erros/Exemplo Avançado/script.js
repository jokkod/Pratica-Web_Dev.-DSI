const btnAddProduct = document.querySelector('.btn-product');
const spaceProducts = document.querySelector('.container');
const spaceElement = document.querySelector('.campo');
const nmProduct = document.querySelector('#nome');
const categoryProduct = document.querySelector('#categoria');
const pricePrdocuct = document.querySelector('#preco');
const quantityPrdocuct = document.querySelector('#estoque');
const codPrdocuct = document.querySelector('#codigo');
const btnSubmit = document.querySelector('input[type="submit"]');
const listItens = document.querySelector('#list-product');

btnAddProduct.addEventListener("click", () => {
    spaceProducts.classList.toogle('ativo');
    if(spaceProducts.classList.contains('ativo')) {
        btnAddProduct.innerText = 'Ocultar Cadastro';
    } else {
        btnAddProduct.innerText = 'Cadastrar Produto';
    }
});