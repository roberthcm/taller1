function calcularDescuento(tipoDeProducto) {
    let descuento = 0;
    switch (tipoDeProducto) {
        case 'carro':
        case 'moto':
            descuento = 15;
            break;
        case 'bicicleta':
        case 'patineta':
            descuento = 10;
            break;
        case 'scooter':
            descuento = 5;
            break;
        default:
            alert("Tipo de producto inválido");
            return;
    } alert("Usted recibirá un descuento del " + descuento + "% en su compra.");
}

const tipoDeProducto = prompt("Ingrese el tipo de producto comprado (carro, moto, bicicleta, patineta, scooter):").toLowerCase();
calcularDescuento(tipoDeProducto);