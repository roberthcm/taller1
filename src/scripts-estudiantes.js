function contarEdades() {
    let mayoresDeEdad = 0;
    let menoresDeEdad = 0;
    for (let i = 1; i <= 10; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i}:`));
        if (edad >= 18) {
            mayoresDeEdad++;
        } else {
            menoresDeEdad++;
        }
    }
    alert("Total de estudiantes mayores de edad: " + mayoresDeEdad);
    alert("Total de estudiantes menores de edad: " + menoresDeEdad);
}
contarEdades();
