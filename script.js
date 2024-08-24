// Bienvenida al sitio web
let primeraVisita = !localStorage.getItem('bienvenidaMostrada');

while (primeraVisita) {
    // Muestra el mensaje de bienvenida
    let nombreUsuario = prompt("Ingrese su nombre");
    console.log(nombreUsuario);

    alert("Hola " + nombreUsuario + "\nBienvenido a Viveros el Botánico");

    // Guarda la información en localStorage para que no vuelva a mostrarse
    localStorage.setItem('bienvenidaMostrada', 'true');

    // Asegura que el bucle no se ejecute de nuevo
    primeraVisita = false;
}
//MENU
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}
// SLIDER
let slideIndex = 0;
mostrarSlide();

// Función para mostrar el slide automático
function mostrarSlide() {
    const slides = document.getElementsByClassName("slide");
    
    // Oculta todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    // Incrementa el índice y vuelve a cero si llega al final
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    
    slides[slideIndex].style.display = "block"; // Muestra la imagen actual
    setTimeout(mostrarSlide, 3000); // Cambia de imagen cada 3 segundos
}

