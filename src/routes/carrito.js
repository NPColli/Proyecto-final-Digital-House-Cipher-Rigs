const express = require('express');
const route = express.Router();
const carritoController = require('../controllers/carritoController');
const authMiddleware = require("../middlewares/authMiddleware");

route.get('/', carritoController.cart); //localhost3000/login
route.post('/:id', carritoController.addProductCart);
route.post('/compra', authMiddleware, carritoController.shop);

module.exports = route;