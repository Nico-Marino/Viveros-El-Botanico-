//MENU
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links li');

// Mostrar y ocultar el menú hamburguesa
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Ocultar el menú al hacer clic en un ítem
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
    });
});

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

