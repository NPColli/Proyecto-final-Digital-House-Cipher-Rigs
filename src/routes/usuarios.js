const express = require('express');
const route = express.Router();
const {body} = require('express-validator');
const usuariosController = require('../controllers/usuariosController');

//validaciones
const validacionRegistro = [
body('nombre').notEmpty().withMessage('Debes completar el campo nombre'),
body('apellido').notEmpty().withMessage('Debes completar el campo apellido'),
body('email').isEmail().withMessage('Debes completar un email válido'),
body('contraseña').notEmpty().withMessage('Debes completar el campo contraseña'),
];

const validacionlogin = [
    body('email').isEmail().withMessage('Debes completar un email válido'),
    body('contrasenia').notEmpty().withMessage('Debes completar el campo contraseña'),
    ];

//rutas
route.get('/', usuariosController.login); //localhost3000/loguearse
route.post('/',validacionlogin, usuariosController.login); //localhost3000/loguearse
route.get('/register', usuariosController.listado); //localhost3000/register
route.post('/register', validacionRegistro, usuariosController.register); //localhost3000/register

module.exports = route;