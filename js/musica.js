// Control de la música de fondo

const audio = document.getElementById("musicaFondo");
const botonMusica = document.getElementById("botonMusica");

// Volumen inicial
audio.volume = 0.45;


// Reproducir música
function reproducirMusica() {

    audio.play()
        .then(() => {
            console.log("Música reproduciéndose");
        })
        .catch((error) => {
            console.log("No se pudo reproducir la música:", error);
        });

}


// Pausar música
function pausarMusica() {

    audio.pause();

}


// Controlar música con el botón
function controlarMusica() {

    if (audio.paused) {

        reproducirMusica();

        botonMusica.textContent = "🔊";

    } else {

        pausarMusica();

        botonMusica.textContent = "🔇";

    }

}


// Botón de música
botonMusica.addEventListener("click", controlarMusica);