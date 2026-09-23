import app from "./api.js";

const form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', ()=> {
    form.addEventListener('submit', manipularForm)
})
async function manipularForm (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const confirmaSenha = document.getElementById('confirmPassword').value;

    if(senha !== confirmaSenha) {
        alert('As senhas não correspondem.');
        return;
    }

    try {
        await app.registerUser({ nome, email, senha});
        alert('Usuário Cadastado com Sucesso!');
    } catch (error) {
        console.error(error);
        alert(`Erro ao Cadastrar usuário ${error.message}`);
    }
}