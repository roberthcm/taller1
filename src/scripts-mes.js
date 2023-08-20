function main() {
    let mes = parseInt(prompt("Introduce el número del mes (1 al 12):"));

    if (mes < 1 || mes > 12) {
        alert("Número de mes inválido. Debe estar entre 1 y 12.");
        return;
    } let meses31Dias = [0, 2, 4, 6, 7, 9, 11];
    
    if (meses31Dias.includes(mes - 1)) {
        alert("Este mes tiene 31 días.");
    } else if (mes === 2) {
        alert("Febrero tiene 28 o 29 días, dependiendo del año.");
    } else {
        alert("Este mes tiene 30 días.");
    }
}

main();