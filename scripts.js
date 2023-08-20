function calcularPromedio(arr) {
    const suma = arr.reduce((total, num) => total + num, 0);
    return arr.length > 0 ? suma / arr.length : 0;
  }
  const grupoPersonas = [
    { nombre: "Persona1", numHijos: 2 },
    { nombre: "Persona2", numHijos: 0 },
    { nombre: "Persona3", numHijos: 1 },
    { nombre: "persona4", numHijos: 4 },
    { nombre: "persona5", numHijos: 6 }
  ];
  let personasConHijos = 0;
  let totalHijos = 0;
  let index = 0;
  while (index < grupoPersonas.length) {
    const numHijos = grupoPersonas[index].numHijos;
    totalHijos += numHijos;
    if (numHijos > 0) {
      personasConHijos++;
    }
    index++;
  }
  const personasSinHijos = grupoPersonas.length - personasConHijos;
  const promedioHijos = calcularPromedio(grupoPersonas.map(persona => persona.numHijos));
  console.log(`Personas con hijos: ${personasConHijos}`);
  console.log(`Personas sin hijos: ${personasSinHijos}`);
  console.log(`Promedio de hijos: ${promedioHijos}`);