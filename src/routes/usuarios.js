const express = require('express');
const route = express.Router();
const usuariosController = require('../controllers/usuariosController');

route.get('/login', usuariosController.login); //localhost3000/loguearse
route.get('/register', usuariosController.register); //localhost3000/register

module.exports = route;