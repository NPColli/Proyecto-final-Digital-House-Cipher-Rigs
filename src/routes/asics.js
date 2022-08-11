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

route.post('/crear', asicController.guardado);

//Lectura
route.get('', asicController.listado);

route.get('/',asicController.detalle);

//actualización
route.get('/editar/:id', asicController.editar);

module.exports = route;