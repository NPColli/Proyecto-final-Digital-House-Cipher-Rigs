const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded({extended :false}));
app.use(express.json());
app.set("view engine", "ejs");

//Rutas
const index = require('./src/routes/main');
const nosotros = require('./src/routes/main');
const contacto = require('./src/routes/main');
const asic = require('./src/routes/asics');
const rig = require('./src/routes/rigs');
const user = require('./src/routes/usuarios');
const carrito = require('./src/routes/carrito');

app.use('/', index); //localhost3000
app.use('/nosotros', nosotros); //localhost3000/nosotros
app.use('/contacto', contacto); //localhost3000/contacto

app.use('/productos', asic); //localhost3000/productos
app.use('/carrito', carrito); //localhost3000/carrito
app.use('/asic', asic); //localhost3000/asic
app.use('/asic/crear', asic); //localhost3000/asic

app.use('/rigs', rig); //localhost3000/rigs
app.use('/rigs/crear', rig); //localhost3000/rigs

app.use('/login', user); //localhost3000/loguearse
app.use('/login/register', user); //localhost3000/register

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
}); // si el servidor corre bien, corre este mensaje por consola