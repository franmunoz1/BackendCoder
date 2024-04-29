// dynamic import permite importar el recurso solo cuando es utilizado

// string.trim() sirve para eliminar espacios innecesarios en los strings

const texto = "              Hola Mundo               ";
console.log(texto);
console.log(texto.trim());

// array.flat() permite aplanar un array

const estudiante = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    colores: ['rojo', 'azul', 'verde'],
};

const array = Object.entries(estudiante);

console.log(array);
console.log(array.flat());