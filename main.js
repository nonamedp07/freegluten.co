const buscador = document.querySelector('.buscar');
const botonBuscar = document.querySelector('.botonbuscar');
const productos = document.querySelectorAll('.producto');

buscador.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        realizarBusqueda();
    }
});

botonBuscar.addEventListener('click', realizarBusqueda);

function realizarBusqueda() {
    const terminoBusqueda = buscador.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('.nombreproducto').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        if (nombreProducto.includes(terminoBusqueda)) {
        producto.style.display = 'block'; 
        } else {
        producto.style.display = 'none'; 
        }
    });
    ordenarProductos();
}
function ordenarProductos() {
    const productosCoincidentes = document.querySelectorAll('.producto:not([style*="display: none"])'); 
    const contenedorProductos = document.querySelector(''); 

    contenedorProductos.innerHTML = '';

    productosCoincidentes.forEach(producto => {
    producto.style.width = '350px'; 
    contenedorProductos.appendChild(producto);
    });
}
ordenarProductos();