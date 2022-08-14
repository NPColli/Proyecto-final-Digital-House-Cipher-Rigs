const path = require("path");
const { body } = require("express-validator"); 

const loginValidations = [
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir tu correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
];

module.exports = loginValidations;
