const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const asicController = require('../controllers/asicController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'../../public/img/asic'))
    },
    filename: (req, file, cb) => {
        console.log(file);
      const newFilename = 'group-' + Date.now() + path.extname(file.originalname)
      cb(null, newFilename);
    }
  })
  
  const upload = multer({ storage: storage })


//Creación
route.get('/crear', asicController.crear);

route.post('/crear',upload.single('image'), asicController.guardado);

//Lectura
route.get('', asicController.listado);

route.get('/:id',asicController.detalle);

//Actualización
route.get('/editar/:id', asicController.editar);
route.post('/editar/:id',upload.single('image'), asicController.actualizar);

//Eliminar
route.post("/destruir/:id", asicController.destruir);
route.post("/softdelete/:id", asicController.eliminar);

module.exports = route;