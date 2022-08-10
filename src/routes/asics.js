const express = require('express');
const route = express.Router();
const asicController = require('../controllers/asicController');

//Creación
route.get('/crear', asicController.crear);

route.post('/crear', asicController.guardado);

//Lectura
route.get('', asicController.listado);

route.get('/detalle',asicController.detalle);


module.exports = route;