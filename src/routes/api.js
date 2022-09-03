const express = require('express');
const route = express.Router();
const cors = require('cors')
const apiController = require('../controllers/apiController.js');

/*** API PARA USUARIOS ***/
route.get('/users',cors(), apiController.listarUsuarios);
route.get('/users/:id',cors(), apiController.mostrarDetalleDeUsuario);

/*** API PARA PROODUCTOS ***/
route.get('/asic', cors(), apiController.listarAsic);
route.get('/asic/:id',cors(), apiController.detalleAsic);

route.get('/rig',cors(), apiController.listarRig);
route.get('/rig/:id',cors(), apiController.detalleRig);

module.exports = route;