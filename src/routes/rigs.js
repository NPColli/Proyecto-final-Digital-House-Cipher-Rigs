const express = require('express');
const route = express.Router();
const path = require('path');
const multer = require('multer');
const rigController = require('../controllers/rigController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,'../../public/img/rigs'))
    },
    filename: (req, file, cb) => {
        console.log(file);
      const newFilename = 'group-' + Date.now() + path.extname(file.originalname)
      cb(null, newFilename);
    }
  })
  
  const upload = multer({ storage: storage })

//Creación
route.get('/crear', rigController.crear);

route.post('/crear', upload.single('image'), rigController.guardado);

//Lectura
route.get('', rigController.listado);

//Detalle
route.get('/:id',rigController.detalle);

//Actualización
route.get('/editar/:id', rigController.editar);
route.post('/editar/:id',upload.single('image'), rigController.actualizar);

//Eliminar
route.post("/destruir/:id", rigController.destruir);
route.post("/softdelete/:id", rigController.eliminar);

module.exports = route;