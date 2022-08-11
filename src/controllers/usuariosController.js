let db = require("../../database/models");

let usuariosController = {
    login: function (req, res) {
        return res.render("./users/login");
    },
    listado: function (req, res){
        db.User.findAll()
        .then(function(users) {
    res.render('./users/register', {users:users})
                })
    },
    register: function (req, res){
        db.User.create({
            email:req.body.email,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
           password:req.body.password ,

        })
        return res.render("./users/register");
},

}
module.exports = usuariosController;
