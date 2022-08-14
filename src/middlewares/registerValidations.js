const path = require("path");
const { body } = require("express-validator"); // body() === check()

const registerValidations = [
  body("nombre")
    .notEmpty()
    .withMessage("Tienes que escribir tu nombre")
    .bail() // si no se corta la validación el usuario recibirá todos los errores juntos
    .isLength({ min: 2 })
    .withMessage("El nombre debe tener al menos 2 caracteres"),
  body("apellido")
    .notEmpty()
    .withMessage("Tienes que escribir tu apellido")
    .bail() 
    .isLength({ min: 2 })
    .withMessage("El apellido debe tener al menos 2 caracteres"),
    body("password")
          .notEmpty()
          .withMessage("Tienes que escribir una contraseña")
          .bail() // si no se corta la validación el usuario recibirá todos los errores juntos
          .isLength({ min: 8, max: 15 })
          .withMessage("La contraseña debe tener entre 8 y 15 caracteres"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir tu correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido")
    
];

module.exports = registerValidations;