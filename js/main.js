// Control principal de la página

document.addEventListener("DOMContentLoaded", function () {

    // Elementos de la pantalla inicial
    const inicio = document.getElementById("inicio");
    const botonAbrir = document.getElementById("botonAbrir");

    // Elementos del mensaje
    const tituloMensaje = document.getElementById("tituloMensaje");
    const textoMensaje = document.getElementById("textoMensaje");
    const firmaMensaje = document.getElementById("firmaMensaje");

    // Elementos de la carta
    const botonCarta = document.getElementById("botonCarta");
    const carta = document.getElementById("carta");
    const botonCerrarCarta = document.getElementById("botonCerrarCarta");

    const tituloCarta = document.getElementById("tituloCarta");
    const textoCarta = document.getElementById("textoCarta");


    // Comprobar que los elementos principales existen

    console.log("Página cargada");
    console.log("Botón:", botonAbrir);


    // Cargar los mensajes

    if (typeof mensajes !== "undefined") {

        tituloMensaje.innerHTML = mensajes.titulo;
        textoMensaje.innerHTML = mensajes.texto;
        firmaMensaje.innerHTML = mensajes.firma;

        tituloCarta.innerHTML = mensajes.tituloCarta;
        textoCarta.innerHTML = mensajes.textoCarta;

    } else {

        console.error("No se encontró mensajes.js");

    }


    // Botón Abrir mi regalo

    if (botonAbrir) {

        botonAbrir.addEventListener("click", function () {

            console.log("Abrir mi regalo funciona");

            // Ocultar pantalla inicial

            inicio.classList.add("ocultar");


            // Reproducir música

            if (typeof reproducirMusica === "function") {

                reproducirMusica();

            }


            // Esperar 6 segundos antes del mensaje final

            setTimeout(function () {

                mostrarMensajeFinal();

            }, 6000);

        });

    } else {

        console.error("No se encontró el botón botonAbrir");

    }


    // Botón para abrir la carta

    if (botonCarta) {

        botonCarta.addEventListener("click", function () {

            carta.classList.add("visible");

        });

    }


    // Botón para cerrar la carta

    if (botonCerrarCarta) {

        botonCerrarCarta.addEventListener("click", function () {

            carta.classList.remove("visible");

        });

    }


    // Cerrar la carta haciendo clic fuera de ella

    if (carta) {

        carta.addEventListener("click", function (evento) {

            if (evento.target === carta) {

                carta.classList.remove("visible");

            }

        });

    }


    // Mostrar el mensaje final

    function mostrarMensajeFinal() {

        console.log("Mostrando mensaje final");


        tituloMensaje.innerHTML = mensajes.mensajeFinal;

        textoMensaje.innerHTML = "";

        firmaMensaje.innerHTML = "";


        // Esperar 3 segundos antes de comenzar la lluvia

        setTimeout(function () {

            lluviaDeFlores();

            mostrarMensajeDespues();

        }, 3000);

    }


    // Mostrar el mensaje después de la lluvia

    function mostrarMensajeDespues() {

        setTimeout(function () {

            tituloMensaje.innerHTML = mensajes.mensajeDespues;

        }, 5000);

    }


    // Crear una flor que cae

    function crearFlorCayendo() {

        const flor = document.createElement("div");

        flor.classList.add("flor-cayendo");


        // Posición horizontal aleatoria

        flor.style.left = Math.random() * 100 + "vw";


        // Tamaño aleatorio

        const tamaño = 0.45 + Math.random() * 0.8;

        flor.style.setProperty("--tamaño", tamaño);


        // Velocidad aleatoria

        const duracion = 5 + Math.random() * 6;

        flor.style.animationDuration = duracion + "s";


        // Retraso aleatorio

        flor.style.animationDelay = Math.random() * 2 + "s";


        document.body.appendChild(flor);


        // Eliminar después de caer

        setTimeout(function () {

            flor.remove();

        }, (duracion + 3) * 1000);

    }


    // Intervalo que controla la lluvia de flores
let intervaloLluvia = null;


// Iniciar lluvia continua
function lluviaDeFlores() {

    // Evitar crear varias lluvias al mismo tiempo
    if (intervaloLluvia !== null) {
        return;
    }

    console.log("Comenzó la lluvia continua de flores");


    intervaloLluvia = setInterval(function () {

        crearFlorCayendo();

    }, 280);

}


    // Hacer la función accesible desde otros elementos

    window.lluviaDeFlores = lluviaDeFlores;

});