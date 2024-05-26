// for each casero

function paraCadaUno(lista, operacion) {
    for (let i = 0; i < lista.length; i++) {
        operacion(lista[i]);
    }
}

const lista = ["Francisco", "Juan", "Pedro", "Maria"];

paraCadaUno(lista, (elemento) => {
    console.log("Callback " + elemento);
})

// funciones callbacks

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

function operar(a, b, operacion) {
    const resultado = operacion(a, b);
    console.log(resultado);
    return resultado;
}

operar(2, 3, sumar); // 5
operar(2, 3, restar); // -1
operar(2, 3, multiplicar); // 6
operar(2, 3, dividir); // 0.6666666666666666
