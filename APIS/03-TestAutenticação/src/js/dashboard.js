// Função LogOut
import app from "./api.js"

const buttonLogOut = document.getElementById('botao-logout');
buttonLogOut.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "../../index.html"
});

document.addEventListener('DOMContentLoaded', () =>  verifyAuthenticator());

async function verifyAuthenticator() {
    const token = localStorage.getItem("token")

    if(!token) {
        alert("Login Inválido.")
        window.location.href = "../../index.html"
    }

    try {
        const result = await app.findUserAuthenticator()
        const user = result.user

        document.getElementById('usuario').innerText = `User: ${user.email}\nNível : ${user.pass}`

        if(user.role === 'admin') {
            const list = document.getElementById('lista-usuarios');
            list.style.display = 'block'
        }
    } catch (error) {
        console.error
        throw error
    }
}