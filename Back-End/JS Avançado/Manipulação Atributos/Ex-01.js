const input = document.querySelector('[type="radio"]');
const buttonType = document.getElementById('type');

buttonType.addEventListener('click', () => {
    if (input) {
        input.setAttribute('type', 'text');
    } else {
        document.querySelector(input).removeAttribute("type")
    }
})
