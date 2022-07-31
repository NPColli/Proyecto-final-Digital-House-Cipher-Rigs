const { randomUUID } = require('crypto');
const { json } = require('express');
const fs=require('fs');
const path= require('path');


const db = require('../../database/models');

const productosController = {

    asiclist: (req, res) => {
        db.Asic.findAll()
        .then(function(Asic) {
        res.render('./products/asic', {Asic:Asics})
        })
    },
    rigs: (req, res) => {
        return res.render('./products/rigs');
    },
    carrito: (req, res) => {
        return res.render('./products/productCart');
    },
    editCreateProdruct: (req, res) => {
        return res.render('./products/productEdit');
    },
    guardarProducto: (req,res) =>{

        
    },
    detalle: (req, res) => {
        return res.render('./products/productDetail');
    },
 
};

module.exports = productosController;


 //products (GET)
//Listado de productos
//products/create (GET)LIIIIISTOOOOOOOO
//Formulario de creación de productos
 //products/:id (GET)
//Detalle de un producto particular
 //products (POST)
//Acción de creación (a donde se envía el formulario)
 //products/:id/edit (GET)
//Formulario de edición de productos
//products/:id (PUT)
//Acción de edición (a donde se envía el formulario):
 //products/:id (DELETE)
//Acción de borrado