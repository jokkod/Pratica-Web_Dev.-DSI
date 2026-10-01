import app from "api.js"

const form = document.querySelector('.login-form');
document.addEventListener('DOMContentLoaded', async() => {
    const emailContainer = document.querySelector(".email-container");
    const photoImage = document.createElement("div");

    photoImage.classList.add("userPhoto");
    photoImage.style.display = "block";
    photoImage.style.width = "80px";
    photoImage.style.height = "80px";
    photoImage.style.margin = "0 auto 15px 0"
    photoImage.style.backgroundSize = "cover"
    photoImage.style.borderRadius = "20px";
    photoImage.style.backgroundColor = "#8c8ea7";
    form.appendChild = "photoImage";

    if(emailContainer && form) {
        form.insertBefore(photoImage, emailContainer);
    }

    try {
        const userImage = await app.UserImageUpdate();

        if(userImage) {
            photoImage.style.backgroundImage = `url('${userImage}')`;
        }
    } catch (error) {
        console.error(error);
        alert(`Erro de carregamento da imagem ${error.message}`);
    }
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