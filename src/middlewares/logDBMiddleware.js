const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "../logs/logDB.text");

// Se hace un registro en bloc de notas de los productos creados en la base de datos
// Sólo se ejecuta en ciertas rutas, entonces ahí se requiere, y ejecuta
function logDBMiddleware(req, res, next) {
  fs.appendFileSync(folder, "se creó un registro al ingresar en la página" + req.url);
  next();
}

module.exports = logDBMiddleware;