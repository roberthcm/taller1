studentsOver21 = 0
studentsUnder21 = 0
amountOver21 = 0
amountUnder21 = 0

let student = Number(prompt("Ingrese la cantidad de estudiantes"));

for (let i = 1; i <= student; i++) {

    let studentAge = Number(prompt("Ingrese la edad del estudiante"))

    let studentCode = Number(prompt("Ingrese el código del estudiante"))

    if (studentAge >=1 && studentAge <= 21) {

        studentsUnder21 = studentsUnder21 + studentAge

        amountUnder21 = amountUnder21 + 1
    } else {
        if (studentAge > 21) {

            studentsOver21 = studentsOver21 + studentAge

            amountOver21 = amountOver21 + 1
        }else {
            console.log("Edad inválida ingresada para el estudiante " + i)
        }
    }
}

averageOver21 = studentsOver21/amountOver21
averageUnder21 = studentsUnder21/amountUnder21

alert("El promedio de edades de los estudiantes mayores de 21 es " + averageOver21 + " y el promedio del resto es " + averageUnder21)