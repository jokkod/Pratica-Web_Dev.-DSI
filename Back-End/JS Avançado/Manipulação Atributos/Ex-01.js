const input = document.querySelector('[type="text"]');
const buttonType = document.getElementById('type');

buttonType.addEventListener('click', () => {
    if (input.getAttribute('type') === 'text') {
        input.setAttribute('type', 'radio');
    } else {
        input.setAttribute('type', 'text');
    }
});
