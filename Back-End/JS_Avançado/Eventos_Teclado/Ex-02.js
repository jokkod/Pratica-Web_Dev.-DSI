const input = document.getElementById('texto');
const divConteudo = document.getElementById('conteudo');

input.addEventListener('keydown', (event) => {
    let tecla = event.key;
    let texto = input.value;
    
    if (tecla === 'Enter') {
        divConteudo.innerText = `Texto escrito: ${texto}`;
        input.value = '';
        //ou input.value = null
    } else {
        divConteudo.innerText = `A tecla apertada foi ${tecla}`;
    }
});