const body = document.querySelector('body');

// Criando elementos com o método createElement('elemento')
const h1 = document.createElement('h1');
h1.innerText = `Criando elementos através do DOM`;
const button = document.createElement('button');
button.innerText = `Clique Aqui`
// Adicionando classe ao elemento criado
button.classList.add('botao');
// Atribuição correta de style ao elemento criado pelo js
button.style.cursor = 'pointer';

button.addEventListener('click', () => {
    body.removeChild(h1);
});

// Apontando local de existência do elemento
// body.appendChild(h1); => Quando você quer passar apenas um elemento pelo DOM

body.append(h1, button); // Quando você quer passar mais de um elemento pelo DOM