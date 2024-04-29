//ejemplo de object entries
let obj = {
    nombre: "Francisco",
    edad: 23,
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123
    },
};

// Object.entries(obj) devuelve un array con los pares clave-valor de un objeto
console.log(Object.entries(obj));

// Object.keys(obj) devuelve un array solo con las claves de un objeto
console.log(Object.keys(obj));

// Object.values(obj) devuelve un array solo con los valores de un objeto
console.log(Object.values(obj));