let pratos = []
const elementoPrato = document.getElementById('prato');
const empilhar = document.getElementById('empilhar');
const desempilhar = document.getElementById('desempilhar');
const pilhaLista = document.getElementById('pilhaLista');

function AtualizarVisualPilha(){
    pilhaLista.innerHTML = '';
    pratos.forEach((item) => {
        const listItem = document.createElement('il');
        listItem.textContent = item;
        pilhaLista.appendChild(listItem);
    });
}

empilhar.addEventListener('click',() => {
    const ValorInput = elementoPrato.value.trim();
    if(ValorInput.trim()){
        const itensParaEmpilhar = ValorInput
            .split('\n')
            .map(item => item.trim())
            .filter(item => item !== '');

        itensParaEmpilhar.forEach(item => {
        pratos.push(ValorInput);
    });
    elementoPrato.value = '';
        AtualizarVisualPilha();
    }
});

desempilhar.addEventListener('click',() => {
    if(pratos.length >0){
        pratos.pop();
        AtualizarVisualPilha();
    }
})