// Segunda pre-entrega
// Inventario
const inventario = [
    // Categoría Plantas
    { nombre: 'Jazmin', precio: 19499, stock: 5, categoria: 'Plantas' },
    { nombre: 'Lavanda', precio: 3900, stock: 0, categoria: 'Plantas' },
    { nombre: 'Rosa', precio: 12500, stock: 1, categoria: 'Plantas' },
    { nombre: 'Fittonia', precio: 6500, stock: 7, categoria: 'Plantas' },
    { nombre: 'Petunias', precio: 6500, stock: 15, categoria: 'Plantas' },
    { nombre: 'Suculentas', precio: 9000, stock: 100, categoria: 'Plantas' },
    { nombre: 'Jazmín del cielo', precio: 15000, stock: 34, categoria: 'Plantas' },
    { nombre: 'Margarita', precio: 7500, stock: 7, categoria: 'Plantas' },
    { nombre: 'Geranio', precio: 8500, stock: 27, categoria: 'Plantas' },
    { nombre: 'Hiedra', precio: 13000, stock: 17, categoria: 'Plantas' },
    { nombre: 'Violeta', precio: 8500, stock: 0, categoria: 'Plantas' },

    // Categoría Jardíneria
    { nombre: 'Tijera de poda', precio: 15000, stock: 2, categoria: 'Jardineria' },
    { nombre: 'Pala de mano', precio: 4500, stock: 3, categoria: 'Jardineria' },
    { nombre: 'Pala angosta', precio: 4200, stock: 0, categoria: 'Jardineria' },
    { nombre: 'Guantes', precio: 1800, stock: 7, categoria: 'Jardineria' },

    // Categoría Semillas
    { nombre: 'Hortalizas', precio: 9900, stock: 2, categoria: 'Semillas' },
    { nombre: 'Aromáticas', precio: 9900, stock: 1, categoria: 'Semillas' },
    { nombre: 'Florales', precio: 9900, stock: 0, categoria: 'Semillas' },
    { nombre: 'Césped', precio: 5900, stock: 10, categoria: 'Semillas' },

    // Categoría Macetas
    { nombre: 'Común terracota', precio: 1300, stock: 2, categoria: 'Macetas' },
    { nombre: 'Bomba terracota', precio: 1850, stock: 4, categoria: 'Macetas' },
    { nombre: 'Salteña fibrocemento', precio: 8500, stock: 9, categoria: 'Macetas' },
    { nombre: 'Piramidal esmaltado', precio: 8500, stock: 0, categoria: 'Macetas' }
];

// Función para listar todos los productos incluyendo los sin stock
function listaProductos() {
    console.log('Productos con stock:');
    inventario.forEach(producto => {
    console.log(`Producto: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock} | Categoría: ${producto.categoria}`);
    });

    console.log('\nProductos sin stock:');
    inventario.filter(producto => producto.stock === 0).forEach(producto => {
    console.log(`Producto: ${producto.nombre} | Precio: $${producto.precio} | Categoría: ${producto.categoria}`);
    });
}

// Función para filtrar productos que tengan stock disponible
function productosConStock() {
    return inventario.filter(producto => producto.stock > 0);
}

// Función para calcular el valor total del inventario
function valorTotalInventario() {
    return inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
}

// Listar todos los productos
console.log('Listado de productos:');
listaProductos();

// Mostrar productos con stock
console.log('\nProductos con stock disponible:');
console.log(productosConStock());

// Calcular valor total del inventario
console.log('\nValor total del inventario: $' + valorTotalInventario());


//Primer pre-entrega
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

