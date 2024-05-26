function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado); // 5

// funcion flecha, tienen return implicito luego de la =>

const sumarArrow = (a, b) => a + b;

const resultadoArrow = sumarArrow(2, 4);

console.log(resultadoArrow); // 6

// reasignables

function mayorDe(n) {
    return (m) => m > n;
}

const mayorQueDiez = mayorDe(10);

console.log(mayorQueDiez(5)); // false