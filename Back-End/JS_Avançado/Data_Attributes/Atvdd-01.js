const botoes = document.querySelectorAll('.slct-periodo');
const tituloInicio = document.getElementById('titulo');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const periodo = botao.dataset.periodo;

        if (periodo === "manha") {
            tituloInicio.textContent = "Bom Dia!";
            tituloInicio.style.color = "#f8da45";
        } else if (periodo === "tarde") {
            tituloInicio.textContent = "Boa Tarde";
            tituloInicio.style.color = "#ffa500"
        } else if (periodo === "noite") {
            tituloInicio.textContent = "Boa Noite";
            tituloInicio.style.color = "#9d00ff"
        }
    });
});