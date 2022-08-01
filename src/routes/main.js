const express = require('express');
const route = express.Router();
const mainController = require('../controllers/mainController');

route.get('/', mainController.index); //localhost3000
route.get('/nosotros', mainController.nosotros); //localhost3000/nosotros
route.get('/contacto', mainController.contacto); //localhost3000/contacto

module.exports = route;