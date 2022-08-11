
let db = require("../../database/models");


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
            image:req.file.path ,
            titulo: req.body.titulo,
            precio: req.body.precio,
            especificaciones:req.body.especificaciones ,

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

detalle: function(req, res) {
    db.Asic.findByPk(req.params.id, {
        include: [{association:"titulo"}, {association: "precio"}, {association:"especificaciones"}]
})
        .then(function(asics){
        res.render('./products/asicDetail',{asics:asics})
    })
},

editar: function (req, res){
    db.Asic.findByPk(req.params.id)
    .then(function(asics){
        res.render('./admin/editarAsic', {asics:asics});
        })
}
}

module.exports = asicController;