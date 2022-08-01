let db = require("../../database/models");

let usuariosController = {
    login: function (req, res) {
        return res.render('./users/login');
    },
    register: function (req, res) {
        return res.render('./users/register')
    }
};

module.exports = usuariosController;