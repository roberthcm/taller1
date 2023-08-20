function calcularTotal(productos) {
    let subtotal = 0;
    console.log("Productos ingresados:");
    productos.forEach(producto => {
        subtotal += producto.precio;
        console.log(`${producto.nombre}: $${producto.precio.toFixed(2)}`);
    });
    
    const iva = subtotal * 0.19;
    const total = subtotal + iva;
    
    console.log("Subtotal: " + subtotal);
    console.log("IVA (19%): " + iva);
    console.log("Total a pagar: " + total);
}

const productos = [];
for (let i = 0; i < 5; i++) {
    const nombre = prompt(`Ingrese el nombre del producto ${i + 1}:`);
    const precio = parseFloat(prompt(`Ingrese el precio del producto ${i + 1} en pesos:`));
    
    productos.push({ nombre, precio });
}

calcularTotal(productos);
