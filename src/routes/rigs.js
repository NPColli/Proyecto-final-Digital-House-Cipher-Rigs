const express = require('express');
const route = express.Router();
const rigController = require('../controllers/rigController');

//Creación
route.get('/crear', rigController.crear);

route.post('/crear', rigController.guardado);

//Lectura
route.get('', rigController.listado);

route.get('/detalle',rigController.detalle);

module.exports = route;