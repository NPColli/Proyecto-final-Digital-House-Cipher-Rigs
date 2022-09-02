const express = require('express');
const route = express.Router();
const apiController = require('../controllers/apiController.js');

/*** API PARA USUARIOS ***/
route.get('/users', apiController.listarUsuarios);
route.get('/users/:id', apiController.mostrarDetalleDeUsuario);

/*** API PARA PROODUCTOS ***/
route.get('/asic', apiController.listarAsic);
route.get('/asic/:id', apiController.detalleAsic);

route.get('/rig', apiController.listarRig);
route.get('/rig/:id', apiController.detalleRig);

module.exports = route;