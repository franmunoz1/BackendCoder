// Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), 
//mostrar esos valores por consola, incrementar la edad en 1, 
//una serie a la lista y volver a mostrarlas. Compartir la definición en el Visual Studio Code.

let nombre = "Francisco";
let edad = 23;
let precio = 100;
let nombreSerie = ["The Office", "Friends", "Breaking Bad"];

console.log(nombre);
console.log(edad);
edad++;
console.log(`La edad incrementada en 1 es: ${edad}`);
console.log(precio);
console.log(`Las series son: ${nombreSerie}`);
nombreSerie.push("The Mandalorian");
console.log(`Las series modificadas son: ${nombreSerie}`);