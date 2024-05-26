//const express = require('express');

import express from 'express'; // Para hacerlo funcionar con npm run dev

// Definir el puerto 8080

const PORT = 8080;

// Creamos nuestra app

const app = express();

//Datos en memoria
const users = [];
let id = 1;

// Configuraciones necesarias para que express pueda leer el body de las peticiones
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//Endpoints - Rutas
// Get users -> sirve para obtener todos los usuarios
app.get("/users", (req, res) => {
    res.json(users);
});

// Post users -> sirve para crear un usuario
app.post("/users", (req, res) => {
    const { username, full_name, age } = req.body;
    const user = {
        id: id,
        username,
        full_name,
        age
    };

    id++;

    users.push(user);

    if (!username || !full_name) {
        return res.status(400).json({
            message: "Username and full name are required", // devolvemos mensaje de error
        });
    }

    if (users.find((u) => u.username === username)) { // Validamos que el nombre de usuario no exista
        return res.status(400).json({
            message: "Username already exists", // devolvemos mensaje de error
        });
    }

    res.status(201).json({
        message: "User created successfully",
    });
});

// Put users -> sirve para actualizar un usuario
app.put("/users/:username", (req, res) => { // actualizamos por nombre de usuario
    const { username } = req.params;
    const { full_name, age } = req.body; //obtengo los datos a actualizar del body

    const user = users.find((u) => u.username === username); //busco el usuario a actualizar

    if (!user) { // si no existe el usuario devuelvo un 404
        return res.status(404).json({
            message: "User not found",
        });
    }

    // Actualizo los datos del usuario
    user.full_name = full_name || user.full_name;
    user.age = age || user.age;

    // Actualizo el usuario dentro del array
    const userIndex = users.findIndex((u) => u.username === username);
    users[userIndex] = user;

    res.json({
        message: "User updated successfully",
    });
});

// Delete users -> sirve para eliminar un usuario
app.delete("/users/:username", (req, res) => {
    const { username } = req.params;

    const user = users.findIndex((u) => u.username === username); //busco el usuario a eliminar

    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    //Elimino el usuario del array
    const userIndex = users.findIndex((u) => u.username === username);
    users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
    });
});


//Listen de la app 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

