let nomeUsuario;
let senhaUsuario;
let email;
let tentativa;
let numTentativas = 1;

do {
    alert(`
        ----- Página de Login -----\n
        Para fazer login digite suas informações corretamente
        `);
    nomeUsuario = prompt(`
        Digite seu nome: 
        `);
    email = prompt(`
            Digite seu email:
            `);
    senhaUsuario = prompt(`
        Crie uma senha com ao menos 8 dígitos:
        `);

    if (!(nomeUsuario && email && email.endsWith("@gmail.com") && senhaUsuario && senhaUsuario.length >= 8)) {
        alert(`Dados Inválidos!\n
            Insira seus dados corretamente para realizar login.`);
    }
    } while (!(nomeUsuario && email && email.endsWith("@gmail.com") && senhaUsuario && senhaUsuario.length >= 8));

    alert("Informações Registradas com Sucesso!");

    while (numTentativas < 3) {
        tentativa = prompt(`
            --- Confirmação de Senha ---\n 
            Tentativa ${numTentativas}/3\n
            Confirme sua senha para realizar acesso:
            `);
        
        if (tentativa === " " || tentativa === "") {
            alert(`Entrada inválida. Espaços não são permitidos como senha.`);
            continue;
        }

        if (tentativa === senhaUsuario) {
            alert(`
                Acesso Liberado!\n
                Confirmação bem sucedida.
                `);
            break;
        } else { 
            alert(`Tentativa ${numTentativas} Inválida`)
            numTentativas++
        }

        if (numTentativas === 3) {
            alert(`Limite de Tentativos Atingido. Acesso Negado.`)
        }

    }