function calcularPrecioVenta(tipo, cantidad) {
    const precioUnitario = 250;
    let descuento = 0;

    if (tipo === "AA") {
        if (cantidad <= 100) {
            descuento = 0.03;
        } else if (cantidad <= 200) {
            descuento = 0.05;
        } else if (cantidad <= 300) {
            descuento = 0.08;
        } else {
            descuento = 0.10; 
        }
    } const precioTotal = cantidad * precioUnitario * (1 - descuento);
    return precioTotal;
}

const tipoHuevo = prompt("Ingrese el tipo de huevo (AA): ");
const cantidadHuevos = parseInt(prompt("Ingrese la cantidad de huevos a llevar: "));

const precioFinal = calcularPrecioVenta(tipoHuevo, cantidadHuevos);
alert("El precio total a pagar es: " + precioFinal );
