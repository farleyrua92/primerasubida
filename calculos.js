let estudiante = {
    nombre: 'Diego',
    apellido: 'Norrea',
    edad: 26,
    notas: {
        matematicas: 4,
        ingles: 3.5,
        programacion: 5
    }
};

let obtenerPromedio=(nota_uno, nota_dos, nota_tres)=>(nota_uno + nota_dos + nota_tres) / 3;

//console.log(obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

module.exports = {
    estudiante,
    obtenerPromedio
};
