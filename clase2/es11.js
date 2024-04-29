// operador nulish

const numero = 1231 % 2 === 0;

const esPar = numero || "No es par";

let operacion;

const resultado = operacion ?? "Otro valor"; 

console.log(esPar);
console.log(resultado);