let contagem = 0;
const botao = document.getElementById("contar");
const contador = document.getElementById("Contador");
function contar(){
    contagem++;
    contador.innerHTML= "click: " + contagem;
}
