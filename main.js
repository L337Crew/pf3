
let productos = [
    {
        id: 1,
        nombre: 'IntelCore-I7',
        precio: 70000,
        nucleos: 8
    },
    {
        id: 2,
        nombre: 'AmdRyzen-9',
        precio: 75000,
        nucleos: 12
    },
    {
        id: 3,
        nombre: 'IntelCore-I5',
        precio: 60000,
        nucleos: 6
    },
    {
        id: 4,
        nombre: 'AmdRyzen-5',
        precio: 50000,
        nucleos: 6
    }
];


let carrito = JSON.parse(localStorage.getItem('carrito')) || {};


let carritoContenedor = document.getElementById('carrito-contenedor');
carritoContenedor.innerHTML = '';

for (let productoId in carrito) {
    let producto = productos.find(function(p) { return p.id === parseInt(productoId); });
    let cantidad = carrito[productoId];
    
    carritoContenedor.innerHTML += '<li>' + producto.nombre + ': $' + producto.precio + ' x ' + cantidad + ' = $' + producto.precio * cantidad + '</li>';
}


var listaProductos = document.getElementById('lista-productos');
listaProductos.innerHTML = '';

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    listaProductos.innerHTML += '<li>' + producto.nombre + ': $' + producto.precio + ' (' + producto.nucleos + ' núcleos) <button onclick="agregarAlCarrito(' + producto.id + ')">Agregar al carrito</button></li>';
}


function agregarAlCarrito(productoId) {
    carrito[productoId] = (carrito[productoId] || 0) + 1;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}


function actualizarCarrito() {
    let carritoContenedor = document.getElementById('carrito-contenedor');
    carritoContenedor.innerHTML = '';

    for (let productoId in carrito) {
        let producto = productos.find(function(p) { return p.id === parseInt(productoId); });
        let cantidad = carrito[productoId];
        
        carritoContenedor.innerHTML += '<li>' + producto.nombre + ': $' + producto.precio + ' x ' + cantidad + ' = $' + producto.precio * cantidad + '</li>';
    }
}
