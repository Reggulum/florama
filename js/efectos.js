// Efectos visuales de la página

// Crear un corazón cuando el usuario hace clic
function crearCorazon(x, y) {

    const corazon = document.createElement("div");

    corazon.textContent = "💛";

    corazon.style.position = "fixed";
    corazon.style.left = x + "px";
    corazon.style.top = y + "px";

    corazon.style.fontSize = "24px";

    corazon.style.pointerEvents = "none";

    corazon.style.zIndex = "9999";

    corazon.style.animation = "subirCorazon 1.5s ease-out forwards";

    document.body.appendChild(corazon);

    setTimeout(function () {

        corazon.remove();

    }, 1500);
}


// Detectar clics en la página
document.addEventListener("click", function (evento) {

    // No crear corazones al pulsar botones
    if (
        evento.target.tagName === "BUTTON" ||
        evento.target.closest(".carta")
    ) {
        return;
    }

    crearCorazon(evento.clientX, evento.clientY);

});