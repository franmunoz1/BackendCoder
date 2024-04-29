// spread operator

const estudiante = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

const estudiante2 = {
    nombre: 'Pedro',
    apellido: 'Gomez',
    edad: 22
}

// operaciones de actualizacion de datos en un objeto estudiante 3 nuevo
const estudiante3 = { ...estudiante, ...{ nombre: "Fran", color: "Azul" } }

console.log(estudiante3);

const nombres = ["Francisco", "Juan", "Pedro"];
const nombres2 = ["Carlos", "Maria", "Ana"];

const nombres3 = [...nombres, ...nombres2]; // agrega los valores, no los reemplaza

console.log(nombres3);


// REST operator, sirve para extraer los valores de un objeto y almacenarlos en una variable
// se puede usar para extraer los valores que no se necesitan.
// en este caso, se extrae el nombre y se almacenan el resto de los valores en la variable rest

const { nombre, ...rest } = estudiante;

console.log(nombre);
console.log(rest);