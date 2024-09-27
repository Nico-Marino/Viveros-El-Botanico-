
// Inventario
const productos = [
    // Categoría Plantas
    { id: 1, nombre: 'Jazmin', precio: 19499, stock: 5, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/jazmin.jpg" },
    { id: 2, nombre: 'Lavanda', precio: 3900, stock: 0, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/lavanda.jpg" },
    { id: 3, nombre: 'Rosa', precio: 12500, stock: 1, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/Rosa.jpg" },
    { id: 4, nombre: 'Fittonia', precio: 6500, stock: 7, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/fittonia.jpg" },
    { id: 5, nombre: 'Petunias', precio: 6500, stock: 15, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/petunias.jpg" },
    { id: 6, nombre: 'Suculentas', precio: 9000, stock: 100, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/suculentas.png" },
    { id: 7, nombre: 'Pothus', precio: 9900, stock: 4, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/pothus.jpg" },
    { id: 8, nombre: 'Jazmín del cielo', precio: 15000, stock: 34, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/jazmindelcielo.jpg" },
    { id: 9, nombre: 'Margarita', precio: 7500, stock: 7, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/margarita.jpg" },
    { id: 10, nombre: 'Geranio', precio: 8500, stock: 27, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/geranio.jpg" },
    { id: 11, nombre: 'Hiedra', precio: 13000, stock: 17, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/hiedra.jpg" },
    { id: 12, nombre: 'Violeta', precio: 8500, stock: 0, categoria: {nombre:'Plantas', id:'plantas'}, img: "./img/plantas/violeta.jpg" },

    // Categoría Jardíneria
    { id: 13, nombre: 'Tijera de poda', precio: 15000, stock: 2, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/tijeradepoda.png" },
    { id: 14, nombre: 'Pala de mano', precio: 4500, stock: 3, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/Palademano.png" },
    { id: 15, nombre: 'Pala angosta', precio: 4200, stock: 0, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/palademanoangosta.png" },
    { id: 16, nombre: 'Guantes', precio: 1800, stock: 7, categoria: {nombre:'Jardineria', id:'jardineria'}, img: "./img/jardineria/guantes.png" },
    { id: 17, nombre: 'Pistola de riego', precio: 10500, stock: 0, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/pistoladeriego.png" },
    { id: 18, nombre: 'Manguera', precio: 16500, stock: 7, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/Manguera.png" },
    { id: 19, nombre: 'Regador', precio: 2200, stock: 10, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/regador.png" },
    { id: 20, nombre: 'Barre hojas', precio: 6500, stock: 9, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/barrehojas.png" },
    { id: 21, nombre: 'Piedras decorativas', precio: 1500, stock: 2, categoria: {nombre:'Jardinería', id:'jardineria'}, img: "./img/jardineria/piedrasdecorativas.png" },

    // Categoría Semillas
    { id: 22, nombre: 'Hortalizas', precio: 9900, stock: 2, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/Hortalizas.png" },
    { id: 23, nombre: 'Aromáticas', precio: 9900, stock: 1, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/semillasaromaticas.png" },
    { id: 24, nombre: 'Florales', precio: 9900, stock: 0, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/florales.png" },
    { id: 25, nombre: 'Césped', precio: 5900, stock: 10, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/semillacesped.png" },
    { id: 26, nombre: 'Media sombra', precio: 11000, stock: 1, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/mediasombra.png" },
    { id: 27, nombre: 'Semilla 7 variedades', precio: 5900, stock: 3, categoria: { nombre:'semillas', id: 'semillas'}, img: "./img/semillas/7variedades.png" },

    // Categoría Macetas
    { id: 28, nombre: 'Común terracota', precio: 1300, stock: 2, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/comunterracota.png" },
    { id: 29, nombre: 'Bomba terracota', precio: 1850, stock: 4, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/bombaterracota.png" },
    { id: 30, nombre: 'Salteña fibrocemento', precio: 8500, stock: 9, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/Macetas1.jpg"},
    { id: 31, nombre: 'Piramidal esmaltado', precio: 8500, stock: 5,categoria: { nombre:'macetas', id: 'macetas'},img: "./img/macetas/piramidalesmaltado.png" },
    { id: 32, nombre: 'Hexagonal con plato', precio: 8500, stock: 6, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/hexagonalconplato.png"},
    { id: 33, nombre: 'Cubo fibrocemento', precio: 4500, stock: 0, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/cubofibrocemento.png" },
    { id: 34, nombre: 'Esfera le parc', precio: 6500, stock: 0, categoria: { nombre:'macetas', id: 'macetas'}, img: "./img/macetas/esferaleparc.png" },
    { id: 35, nombre: 'Andina lisa', precio: 4500, stock: 0,categoria: { nombre:'macetas', id: 'macetas'},img: "./img/macetas/andinalisa.png" },
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const shop = document.querySelector("#contenedor");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

//Para que se muestren los productos
function cargarProductos(productosElegidos) {

shop.innerHTML = "";

productosElegidos.forEach((producto) => {
    let content = document.createElement("div");
    content.classList.add("producto");
    content.innerHTML = `
    <img class="img_productos" src="${producto.img}"">
    <h2 class="h2_content">${producto.nombre}</h2>
    <p class="p_content"> $${producto.precio}</p>
    `
    shop.append(content);

    let button = document.createElement("button");
    button.classList.add("boton-carrito");
    button.innerText = "Agregar al carrito";

    button.addEventListener("click", () => {
        agregarAlcarrito(producto);
    })

    content.append(button);
});
}
cargarProductos(productos);

//Filtrar productos
botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id )

            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
})

//Funcion que actualiza la parte visual del carrito
function actualizarCarrito() {
    carritoProductos.innerHTML = ""; //Limpia el contenido anterior

    if (carrito.length === 0) {
        carritoVacio.classList.remove("ocultar");
        carritoProductos.classList.add("ocultar");
    } else {
        carritoVacio.classList.add("ocultar");
        carritoProductos.classList.remove("ocultar");

        carrito.forEach((producto) => {
            let content = document.createElement("div");
            content.classList.add("carrito-producto");
            content.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p> $${producto.precio}</p>
            <p> Cantidad: ${producto.cantidad}</p>
            <p> Subtotal: $${producto.precio * producto.cantidad}</p>
            `;

            //Botón eliminar
            let button = document.createElement("button");
            button.classList.add("carrito-producto-boton");
            button.innerText = "X";
            button.addEventListener("click", () => {
                carrito = carrito.filter(item => item.id !== producto.id);//Elimina el producto del carrito
                actualizarCarrito(); //Actualiza la parte visual del carrito
            });
            content.append(button);
            carritoProductos.append(content);
        });
    }
    sumaTotal();
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
//Agrego una propiedad a mi array
//Agregar productos al carrito
function agregarAlcarrito(producto) {
    
    let productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }
    
    actualizarCarrito();
}

//Funcion para calcular el total

function sumaTotal() {
    let total = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0);
    carritoTotal.innerText = `$${total}`;
}

actualizarCarrito();

//Funcion que anuncia cuando no hay stock del producto
function agregarAlcarrito(producto) {
    let productoEnCarrito = carrito.find((item) => item.id === producto.id);
    
    if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < producto.stock) {
            productoEnCarrito.cantidad++;
        } else {
            Swal.fire({
                title: 'Stock insuficiente',
                text: 'No hay suficiente stock de este producto',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: 'black'
            });
        }
    } else {
        if (producto.stock > 0) {
            carrito.push({...producto, cantidad: 1});
        } else {
            Swal.fire({
                title: 'Producto no disponible',
                text: 'No hay stock de este producto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: 'black'
            });
        }
    }

    actualizarCarrito();
}


//***** SWEETALERT *****//

const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", () => {
    Swal.fire({
        title: 'Gracias por su compra',
        text: 'Presione aceptar para finalizarla',
        confirmButtonText: 'Aceptar',
        showCancelButton: 'true',
        cancelButton: 'cancelar',
        cancelButtonColor: 'black', 
        cancelButtonText: 'Cancelar',
        iconColor: 'white',
        iconHtml: '<i class="bi bi-emoji-smile-fill"></i>',
        confirmButtonColor: 'black',
    
    })
})

//Limpia el carrito una vez finalizada la compra
const finalizarCompra = () => {
    carrito = [];
    actualizarCarrito();
    localStorage.removeItem("carrito"); // Limpia el localStorage
};

sweetAlert.addEventListener("click", () => {
    Swal.fire({
        title: 'Gracias por su compra',
        text: 'Presione aceptar para finalizarla',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'black',
        iconHtml: '<i class="bi bi-emoji-smile-fill"></i>',
    }).then((result) => {
        if (result.isConfirmed) {
            finalizarCompra();
        }
    });
});

