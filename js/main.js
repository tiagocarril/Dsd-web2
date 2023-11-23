

var carrito = [];
var total = 0;


function agregarAlCarrito(boton) {
    var producto = boton.parentNode;
    var nombre = producto.dataset.nombre;
    var precio = parseFloat(producto.dataset.precio);

    carrito.push({ nombre, precio });

    mostrarCarrito();

    total += precio;
    actualizarTotal();
}


function mostrarCarrito() {
    var listaCarrito = document.getElementById("lista-carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach(function (producto) {
        var li = document.createElement("li");
        li.textContent = producto.nombre + " - $" + producto.precio;
        listaCarrito.appendChild(li);
    });
}


function actualizarTotal() {
    var totalElemento = document.getElementById("total");
    totalElemento.textContent = total.toFixed(2);
}


      function vaciarCarrito() {
    carrito = [];
    total = 0;

    mostrarCarrito();
    actualizarTotal();
}
