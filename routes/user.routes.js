const express = require('express');
const api = express.Router();

api.get('/', (req, res) => {
    res.send('Ruta principal de mi servidor')
});
api.get('/user', (req, res) => {
    res.send('traer un usuario')
});
api.post('/user', (req, res) => {
    res.status(200).send({ message: 'se creó un usuario'})
});
api.put('/user', (req, res) => {
    res.status(200).send({ message: 'se actualizó el usuario'})
});
api.delete('/user', (req, res) => {
    res.status(200).send({ message: 'Se elimino el usuario'})
});
api.delete('/login', (req, res) => {
    res.send({ message: 'Login de usuario'})
});

module.exports = api;