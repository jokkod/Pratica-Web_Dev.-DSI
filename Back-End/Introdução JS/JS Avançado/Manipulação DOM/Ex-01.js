const id = document.getElementById('titulo');
function manipulaTitulo() {
    let texto1 = 'Título Central';
    let texto2 = 'Título Indisponível';
    /* id.innerText = "Titulo Indisponível!" */

    if(id.innerText == texto1){
        id.innerText = texto2
    }else {
        id.innerText = texto1
    }
}

function mover() {
    id.style.cursor = 'pointer';
    id.style.color = "#f6f6";
}

function retirarMouse() {
    id.style.color = "#000000";
}