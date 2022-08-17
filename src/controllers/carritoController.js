let db = require("../../database/models");
const carritoController = {
    cart: function (req, res) {
        let pedidoRig = db.Rig.findAll();
        let pedidoAsic = db.Asic.findAll();
        Promise.all([pedidoRig, pedidoAsic])
        .then (function([rigs, asics]){
       res.render('./products/productCart', {rigs: rigs, asics: asics})
    });
    },
    addProductCart: (req, res) => {
        let pedidoRig = db.Rig.findOne({
          where: { id_rigs: req.params.id },
          raw: true,
        });
        let pedidoAsic = db.Asic.findOne({
            where: { id_asic: req.params.id },
            raw: true, 
          });
          Promise.all([pedidoRig, pedidoAsic])
        .then((productdb) => {
          let cantidad = parseInt(req.body.cantidad);
    
          const indexItem = req.session.cart.findIndex(
            (item) => item.id == productdb.id
          );
          if (indexItem != -1) {
            req.session.cart[indexItem].cantidad =
              req.session.cart[indexItem].cantidad + cantidad;
          } else {
            
            req.session.cart.push({ ...productdb, cantidad });
          }
          console.log(cantidad);
          res.redirect('./products/productCart');
        });

    },

    shop: (req, res) => {

    }
}

module.exports = carritoController;
