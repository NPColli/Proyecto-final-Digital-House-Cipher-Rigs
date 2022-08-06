let db = require("../../database/models");

const controller = {
    index: (req, res) => {
        return res.render('index');
    } ,
        contacto: function(req, res){
            db.Contact.create ({
                nombre:req.body.nombre ,
                email: req.body.email,
                asunto: req.body.asunto,
                mensaje:req.body.mensaje ,
            })
        return res.render('contacto');
        }
    ,
    nosotros: (req, res) => {
        return res.render('nosotros');
    }
};

module.exports = controller;
