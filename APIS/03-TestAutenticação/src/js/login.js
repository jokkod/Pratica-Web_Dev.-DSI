import app from "api.js"

const form = document.querySelector('.form');
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', manipulaForm)
})

async function manipulaForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    if (!email || !senha) {
        let message = 'Todos os campos são obrigatórios.'
        return res.status(400).json({ message })
    }

    try {
        const result = await app.loginUser({ email, senha });

        localStorage.setItem("token", result.token);

        // Controlando a navegação da página
        window.location.href = "src/pages/dashboard.html"
    } catch (error) {
        console.error(error);
        alert(`Erro de login do usuário ${error.message}`);
    }
}

const photoImage = document.createElement("div");
photoImage.classList.add = "userPhoto";
photoImage.style.display = "none";
photoImage.style.width = "5px";
photoImage.style.height = "auto";

const formContainer = document.querySelector("form");