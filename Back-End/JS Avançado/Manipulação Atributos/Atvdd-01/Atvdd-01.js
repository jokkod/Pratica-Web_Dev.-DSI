const inputSenha = document.querySelector('[type= "text"]');
let imgEsconderSenha = document.querySelector('.input-icon');
const btnRegistrar = document.getElementById('btn-confirm');

inputSenha.addEventListener('input', () => {
    if (inputSenha.value.length > 0) {
        imgEsconderSenha.style.display = 'block';
    } else {
        imgEsconderSenha.style.display = 'none';
    }
});


imgEsconderSenha.addEventListener('click', () => {
    if(inputSenha.getAttribute('type') === ('text')){
        inputSenha.setAttribute('type', 'password');
        imgEsconderSenha.src = "src/assets/unhide.png";
    } else {
        inputSenha.setAttribute('type', 'text');
        imgEsconderSenha.src = "src/assets/hide.png"
    }
});

btnRegistrar.addEventListener('click', () => {
    if (inputSenha.value.length > 0 && inputSenha.value.length >= 8) {
        let mnsg = document.getElementById('mnsgConfirmacao');
        mnsg.innerText = `Senha Registrada com Sucesso!`;
        mnsg.style.color = "#80ef80";
    }
});
