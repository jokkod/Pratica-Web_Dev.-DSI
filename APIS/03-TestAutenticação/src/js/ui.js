// Fazer Comentários descrevendo processos...
function createImageModal(user, salvarImagem, alterarImagem) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const conteudo = document.createElement('div');
    conteudo.classList.add('modal-content');

    const titulo = document.createElement('h2');
    titulo.innerText = 'Alterar Imagem';

    const areaImage = document.createElement('div');
    areaImage.classList.add('image-content');
    areaImage.innerText = 'Insira sua imagem de perfil';

    const inputImage = document.createElement('input');
    inputImage.type = 'file';
    inputImage.accept = 'image/*';
    inputImage.style.display = 'none'

    const buttonAddImage = document.createElement('button');
    buttonAddImage.classList('image-button');
    buttonAddImage.innerText = 'Adicionar Imagem';

    /* Forma alternativa de processar click para tornar div visível:
    () => inputImage.click() */
    buttonAddImage.addEventListener('click', () => inputImage.style.display = 'block')

    inputImage.addEventListener('change', () => {
        const arquivo = inputImage.files[0]

        if(!arquivo) {
            return
        }

        const image = document.createElement('img');
        image.classList.add('image-preview');

        // Fazendo método que irá criar URL temporária p/ visualização da imagem
        image.src = URL.createObjectURL(arquivo);
        
        areaImage.innerText = '';
        areaImage.appendChild(image);
    })

    const cancelar = document.createElement('button');
    cancelar.classList.add('botao-cancelar');
    cancelar.innerText = 'Cancelar';
    
    cancelar.addEventListener('click', () => modal.remove())
}