let db = require("../../database/models");

let rigController = {
    crear: function ( req, res){
db.Rig.findAll()
.then(function(rigs){
    return res.render('./admin/crearRig', {rigs:rigs})
})
    }
    ,
    guardado: function (req, res){
        db.Rig.create({
            image:req.file.filename,
            titulo: req.body.titulo,
            precio: req.body.precio,
            especificaciones:req.body.especificaciones ,
            status: 1,
        })
        res.redirect("/rigs");
    }
,
listado: function (req, res){
    db.Rig.findAll()
    .then(function(rigs) {
res.render('./products/rigs', {rigs:rigs})
            })
},

detalle: (req, res) => {
    db.Rig.findByPk(req.params.id)
    .then(function(rigs){
    res.render('./products/rigDetail', {rigs:rigs});
    })
} ,

editar: function (req, res){
    db.Rig.findByPk(req.params.id)
    .then(function(rigs){
        res.render('./admin/editarRig', {rigs:rigs});
        })
},
actualizar: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      console.log("Entró al método actualizar del asicController.js");
      db.Rig.update(
        {
          nombre: req.body.nombre,
          precio: req.body.precio,
       especificaciones: req.body.especificaciones,
          image: req.file.filename,
          status: 1,
        },
        {
          where: { id_rigs: req.params.id },
        }
      );
      res.redirect("/rigs");
      
    }
},
//Hard delete
destruir: (req, res) => {
    console.log("Entró al método destroy del rigController.js");
    db.Asic.destroy({
      where: {
        id_rigs: req.params.id,
      },
    });
    res.redirect("/");
  },

//Soft delete
  eliminar: (req, res) => {
    db.Rig.update(
      {
        status: 0,
      },
      {
        where: { id_rigs: req.params.id },
      }
    );
    res.redirect("/");
  },
}

module.exports = rigController;