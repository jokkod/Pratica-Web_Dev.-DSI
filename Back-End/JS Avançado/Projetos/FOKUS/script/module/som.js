export default function initAudio() {
    const audio = document.getElementById('alternar-musica');
    const somAmbiente = new Audio('sons/luna-rise-part-one.mp3');
    somAmbiente.loop = true;

        audio.addEventListener('change', () => {
            if (somAmbiente.paused) {
                somAmbiente.play();
            } else {
                somAmbiente.pause();
            }
        });
}