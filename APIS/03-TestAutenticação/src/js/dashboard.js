// Função LogOut
const buttonLogOut = document.getElementById('botao-logout');
buttonLogOut.addEventListener('click', () => {
    localStorage.removeItem("token")
    window.location.href = "../../index.html"
})