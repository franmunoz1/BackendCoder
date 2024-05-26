// Primer servidor en Express.js
const express = require("express");

const app = express(); // Crea una aplicación de express

// Puerto de la aplicación
const PORT = 3000; // Puerto en el que correrá el servidor

// creamos nuestras rutas
app.get("/", (req, res) => { //el primer parametro es la url, el segundo es una funcion que recibe dos parametros, el primer parametro es el request y el segundo es el response
    //res.send(`<h1>Hola mundo!</h1>`); // send envia texto plano o codigo html
    res.json({                          // json envia un objeto json
        nombre: "Juan",
        apellido: "Perez",
    })
});                                     // puedo poner en la response codigo html

// Params
app.get("/saludo/:tipo/:sueldo", (req, res) => { // :tipo la clave http://localhost:3000/saludo/jefe -> jefe es el valor de tipo, es el valor que ingresa el cliente
    console.log(req.params); // accedo a los parametros que me envia el cliente

    //obtener resultados de req.params deseestructurando -> es la mejor forma de obtener los datos
    const { tipo, sueldo } = req.params;

    if (isNaN(sueldo)) { //validacion para que el parametro sueldo sea numerico
        res.send(`<h1>El sueldo debe ser un número</h1>`);
        return;
    }

    res.send(`<h1>Hola ${tipo}, tu sueldo es de $${sueldo}</h1>`);

});

// Query

app.get("/productos", (req, res) => {

    const { nombre, precio } = req.query;

    console.log(req.query); // accedo a los query que me envia el cliente, puedo declarar variables dentro de la url
    console.log(nombre, precio);

    const productos = [
        {
            id: 1,
            nombre: "Producto1",
            precio: 100,
        },
        {
            id: 2,
            nombre: "Producto2",
            precio: 200,
        },
    ];

    const newProducts = productos.filter((prod) => prod.nombre === nombre || prod.precio === Number(precio));

    res.json({ newProducts });

    res.json({ productos });
});

app.get("/products/:id", (req, res) => { // mostrar productos por id
    const { id } = req.params;

    const idSearch = Number(id);

    if (isNaN(idSearch)) {
        res.json({
            error: "El id no es un numero valido",
        });
        return;
    }

    const productos = [
        {
            id: 1,
            precio: 100,
            nombre: "Camisa",
            descripcion: "Camisa blanca",
        },
        {
            id: 2,
            precio: 180,
            nombre: "Pantalon",
            descripcion: "Pantalon rayado",
        },
        {
            id: 3,
            precio: 90,
            nombre: "Zapatos",
            descripcion: "Zapatos negros",
        },
        {
            id: 4,
            precio: 200,
            nombre: "Blusa",
            descripcion: "Blusa azul",
        },
    ];

    // Simula una busqueda en la base de datos
    const product = productos.find((prod) => prod.id === idSearch);

    if (!product) {
        res.json({
            error: "Product not found",
        });
        return;
    }

    res.json(product);
});


app.get("/*", (req, res) => { //error 404 si no encuentra la ruta dentro de las especificadas
    res.send(`<h1>404 - Not Found</h1>`);
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
