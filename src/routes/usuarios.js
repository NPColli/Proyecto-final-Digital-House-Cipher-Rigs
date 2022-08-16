const express = require('express');
const route = express.Router();
const {body} = require('express-validator');
const loginValidations = require("../middlewares/loginvalidations");
const registerValidations = require("../middlewares/registerValidations");
const guestMiddleware = require("../middlewares/guestMiddleware");
const logDBMiddleware = require("../middlewares/logDBMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const db = require("../../database/models")

const usuariosController = require('../controllers/usuariosController');


//login
route.get('/', guestMiddleware, usuariosController.login); //localhost3000/login
route.post('/', loginValidations, usuariosController.processLogin); //localhost3000/login
//Registro
route.get('/register', guestMiddleware, usuariosController.register);
route.post('/register', registerValidations, logDBMiddleware,  usuariosController.processRegister) //localhost3000/register
//Perfil
route.get('/profile/:id',authMiddleware, usuariosController.profile); //authMiddleware
//Logout
route.get("/logout/", usuariosController.logout);
module.exports = route;

//Editar usuario
route.get("/editar/:id", usuariosController.uEdit);
route.post("/editar/:id", registerValidations, usuariosController.uUpdate);