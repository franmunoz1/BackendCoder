// primera promesa

function sumar(a, b) {
  return new Promise(function (resolve, reject) {
    resolve(a + b);
  });
}