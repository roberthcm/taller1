function obtenerNombreMes(numeroMes) {
    const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
    return meses[numeroMes - 1] || "Mes inválido";
}

function obtenerSignosZodiaco(numeroMes) {
    const signos = [ "Capricornio - Acuario", "Acuario - Piscis", "Piscis - Aries", "Aries - Tauro", "Tauro - Géminis", "Géminis - Cáncer", "Cáncer - Leo", "Leo - Virgo", "Virgo - Libra", "Libra - Escorpio", "Escorpio - Sagitario", "Sagitario - Capricornio" ];
    return signos[numeroMes - 1] || "Mes inválido";
}
const numeroIngresado = parseInt(prompt("Ingresa un número entre 1 y 12:"));

if (numeroIngresado >= 1 && numeroIngresado <= 12) {
    const nombreMes = obtenerNombreMes(numeroIngresado);
    const signosZodiaco = obtenerSignosZodiaco(numeroIngresado);

    alert("El número ingresado corresponde a " + nombreMes);
    alert("Los signos del zodiaco para este mes son: " + signosZodiaco);
} else {
    alert("Número inválido. Debe estar entre 1 y 12.");
}
