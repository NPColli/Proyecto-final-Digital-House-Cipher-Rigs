const express = require('express');
const route = express.Router();
const productosController = require('../controllers/productosController');

route.get('/asic', productosController.asiclist); //localhost3000/asic
route.get('/rigs', productosController.asiclist); //localhost3000/rigs
route.get('/productCart', productosController.carrito); //localhost3000/carrito

route.get('/productos', productosController.detalle); //localhost3000/productos
route.get('/productEdit', productosController.editCreateProdruct); //localhost3000/Creacion y Edicion de productos
route.post('/guardar',productosController.guardarProducto);

module.exports = route;