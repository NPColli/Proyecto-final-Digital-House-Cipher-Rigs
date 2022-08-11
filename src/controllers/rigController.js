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
            image:req.file.path,
            titulo: req.body.titulo,
            precio: req.body.precio,
            especificaciones:req.body.especificaciones ,

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
}
}

module.exports = rigController;