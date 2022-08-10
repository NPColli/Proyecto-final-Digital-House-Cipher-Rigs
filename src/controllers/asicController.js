
let db = require("../../database/models");

let asicController = {
    crear: function ( req, res){
db.Asic.findAll()
.then(function(asics){
    return res.render('./products/crearAsic', {asics:asics})
})
    }
    ,
    guardado: function (req, res){
        db.Asic.create({
            image:req.body.imagen ,
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

detalle: (req, res) => {
    return res.render('./products/productDetail');
} ,
}

module.exports = asicController;