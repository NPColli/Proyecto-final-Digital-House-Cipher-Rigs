let db = require("../../database/models");
const { Sequelize } = require("sequelize");
const { response } = require("express");

const apiController = {
  /* ************************************* USUARIOS */
  listarUsuarios: (req, res) => {
    // /api/users/
    console.log("entrando al método listarUsuarios del apiController.js");
    //return res.send("listarUsuarios")
    db.User.findAll({
      attributes: [
        "user_id",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("nombre"),
            " , ",
            Sequelize.col("apellido")
          ),
          "nombre",
        ],
        "email",
        [
          Sequelize.fn("CONCAT", "/api/users/", Sequelize.col("User.user_id")),
          "detail",
        ],
      ],
    })
      .then((users) => {
        //return res.send(users)
        console.log(users);
        res.status(200).json({
          //envío info en formato JSON
          count: users.length,
          data: users,
          status: 200,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  mostrarDetalleDeUsuario: (req, res) => {
    // /api/users/:id
    console.log(
      "entrando al método mostrarDetalleDeUsuario del apiController.js"
    );
    db.User.findByPk(req.params.id, {
      attributes: [
        "user_id",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("nombre"),
            " , ",
            Sequelize.col("apellido")
          ),
          "nombre",
        ],
        "email"
      ],
    })
      .then((usuario) => {
        res.status(200).json({ data: usuario, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  /* ************************************* PRODUCTOS */
  listarAsic: function (req, res){
    db.Asic.findAll()
    .then((asics) => {
        res.status(200).json({ data: asics, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
},
detalleAsic: (req, res) => {
    db.Asic.findByPk(req.params.id)
    .then((asics) => {
        res.status(200).json({ data: asics, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
} ,
listarRig: function (req, res){
    db.Rig.findAll()
    .then((rigs) => {
        res.status(200).json({ data: rigs, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
},
detalleRig: (req, res) => {
    db.Rig.findByPk(req.params.id)
    .then((rigs) => {
        res.status(200).json({ data: rigs, status: 200 });
      })
      .catch((err) => {
        res.send(err);
      });
} 

};

module.exports = apiController;