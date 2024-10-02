
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const shop = document.querySelector("#contenedor");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");

let productos = [];

fetch("js/productos.json")
.then(response => response.json())
.then(data => {
    productos = data;
    cargarProductos(productos);
});

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
            button.innerText = "❌";
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
                iconHtml: '<i class="bi bi-database-dash"></i>',
                iconColor: 'white',
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
                text: 'Este producto se encuentra momentáneamente  agotado',
                iconHtml: '<i class="bi bi-database-x"></i>',
                iconColor: 'white',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: 'black',
            });
        }
    }

    actualizarCarrito();
}

// Función para limpiar el carrito una vez finalizada la compra
const finalizarCompra = () => {
    carrito = [];
    actualizarCarrito();
    localStorage.removeItem("carrito"); // Limpia el localStorage
    Swal.fire({
        title: 'Gracias por su compra',
        text: 'Presione aceptar para finalizarla',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'black',
        iconHtml: '<i class="bi bi-emoji-smile-fill"></i>',
        iconColor: 'white',
    });
};
// Evento al hacer clic en el botón de finalizar compra
document.getElementById("sweetAlert").addEventListener("click", () => {
    // Validar si el carrito está vacío
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No puedes finalizar tu compra porque el carrito está vacío.',
            iconHtml: '<i class="bi bi-cart-x"></i>',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: 'black',
            iconColor: 'white',
        });
    } else {
        // Si el carrito tiene productos, se procede con la compra
        Swal.fire({
            title: 'Estás a un paso de terminar',
            text: 'Presiona aceptar para finalizar tu compra.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'black',
            iconHtml: '<i class="bi bi-check-circle"></i>',
            iconColor: 'white',
        }).then((result) => {
            if (result.isConfirmed) {
                finalizarCompra();
            }
        });
    }
});

