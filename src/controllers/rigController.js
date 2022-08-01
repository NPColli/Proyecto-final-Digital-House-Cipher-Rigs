let db = require("../../database/models");

let rigController = {
    crear: function ( req, res){
db.Rig.findAll()
.then(function(rigs){
    return res.render('./products/crearRig', {rigs:rigs})
})
    }
    ,
    guardado: function (req, res){
        db.Rig.create({
            image:req.body.imagen ,
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
}
}

module.exports = rigController;