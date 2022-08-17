
let db = require("../../database/models");
const { validationResult } = require("express-validator");

let asicController = {
    crear: function ( req, res){
db.Asic.findAll()
.then(function(asics){
    return res.render('./admin/crearAsic', {asics:asics})
})
    }
    ,
    guardado: function (req, res){
        db.Asic.create({
            image:req.file.filename,
            titulo: req.body.titulo,
            precio: req.body.precio,
            especificaciones:req.body.especificaciones ,
            status: 1,

        })
        res.redirect("/asic");
    }
,
listado: function (req, res){
    db.Asic.findAll()
    .then(function(asics) {
res.render('./products/asic', {asics:asics})
            })
},

detalle: (req, res) => {
    db.Asic.findByPk(req.params.id)
    .then(function(asics){
    res.render('./products/asicDetail', {asics:asics});
    })
} ,

editar: function (req, res){
    db.Asic.findByPk(req.params.id)
    .then(function(asics){
        res.render('./admin/editarAsic', {asics:asics});
        })
},

actualizar: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      console.log("Entró al método actualizar del asicController.js");
      db.Asic.update(
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
       especificaciones: req.body.especificaciones,
          image: req.file.filename,
          status: 1,
        },
        {
          where: { id_asic: req.params.id },
        }
      );
      res.redirect("/asic");
      
    }
},
//Hard delete
destruir: (req, res) => {
    console.log("Entró al método destroy del asicController.js");
    db.Asic.destroy({
      where: {
        id_asic: req.params.id,
      },
    });
    res.redirect("/");
  },
//Soft delete
  eliminar: (req, res) => {
    db.Asic.update(
      {
        status: 0,
      },
      {
        where: { id_asic: req.params.id },
      }
    );
    res.redirect("/");
  },
}

module.exports = asicController;