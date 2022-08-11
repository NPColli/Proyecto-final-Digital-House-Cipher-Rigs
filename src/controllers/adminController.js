let db = require("../../database/models");

let adminController = {
    crearasic: function ( req, res){
        db.Asic.findAll()
        .then(function(asics){
            return res.render('./admin/crearAsic', {asics:asics})
        })
            }
            ,
            guardadoasic: function (req, res){
                db.Asic.create({
                    image:req.body.imagen ,
                    titulo: req.body.titulo,
                    precio: req.body.precio,
                    especificaciones:req.body.especificaciones ,
        
                })
                res.redirect("/asic");
            },
            crearrig: function ( req, res){
                db.Rig.findAll()
                .then(function(rigs){
                    return res.render('./admin/crearRig', {rigs:rigs})
                })
                    }
                    ,
                    guardadorig: function (req, res){
                        db.Rig.create({
                            image:req.body.imagen ,
                            titulo: req.body.titulo,
                            precio: req.body.precio,
                            especificaciones:req.body.especificaciones ,
                
                        })
                        res.redirect("/rigs");
                    }

}

module.exports = adminController;