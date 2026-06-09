class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }

    login(emailDigitado, senhaDigitada) {
        if (this.email === emailDigitado && this.password === senhaDigitada) {
            alert("Login realizado com Sucesso!");
        } else {
            alert("Falha no login!");
        }
    }

}

const nomeCadastro = prompt(`Digite o seu nome de usuário:`);
const emailCadastro = prompt(`Digite o seu email de usuário:`);
const senhaCadastro = prompt(`Digite o sua senha de usuário:`);

const novoCadastro = new User(nomeCadastro, emailCadastro, senhaCadastro);

const emailLogin = prompt(`Confirme seu email abaixo para fazer login:`);
const senhaLogin = prompt(`Confirme sua senha abaixo para fazer login:`);

novoCadastro.login(emailLogin, senhaLogin);