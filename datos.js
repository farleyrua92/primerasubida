console.log('----USO DE REQUIRE----');
const estudiante1 = require('./calculos');
console.log(estudiante1.estudiante);
console.log('El promedio de '+ estudiante1.estudiante.nombre + ' es: ' + estudiante1.obtenerPromedio(4,5,3));


//----------Otra forma de hacerlo es la siguiente usando destructuracion----------//
console.log('----USO DE DESTRUCTURACION - PARTE I----');
const {estudiante, obtenerPromedio} = require('./calculos');
console.log('El nombre del estudiante es '+estudiante.nombre);
console.log('El promedio de '+estudiante.nombre+' es '+obtenerPromedio(estudiante.notas.ingles,estudiante.notas.matematicas,estudiante.notas.programacion));

//----------Otra forma de hacerlo es la siguiente haciendo uso de destructuracion mas simplificado----------//
console.log('----USO DE DESTRUCTURACION - PARTE II----');
let {nombre, edad, notas: {matematicas, ingles, programacion}} = estudiante;
console.log('El nombre del estudiante es ' + nombre);
console.log('El promedio de ' + nombre + ' es ' + obtenerPromedio(matematicas,ingles,programacion));
console.log('La edad de ' + nombre + ' es ' + edad);

//----------Uso de FileSystem----------//
const fs = require('fs');
let crearArchivo = (estudiante) => {
    texto = 'El estudiante ' + nombre + ' \n' + 
            'tiene un promedio de ' + obtenerPromedio(matematicas, ingles, programacion);
    fs.writeFile('archivo.txt', texto, (err)=>{
        if (err) throw (err)
        console.log('El archivo ha sido creado');
    });
}

console.log('----USO DE LA VARIALE FILESYSTEM----')
crearArchivo(estudiante);