const express = require('express');
const route = express.Router();
const carritoController = require('../controllers/carritoController');

route.get('/', carritoController.view); //localhost3000/loguearse

module.exports = route;