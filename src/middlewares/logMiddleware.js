const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "../logs/log.text");

// Se hace un registro en bloc de notas de las URL que son visitadas
// Se ejecuta en todas las rutas, entonces se requiere y ejecuta en app.js
function logMiddleware(req, res, next) {
  fs.appendFileSync(folder, "se ingresó en la página" + req.url);
  next();
}

module.exports = logMiddleware;
