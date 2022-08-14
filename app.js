const express = require('express');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const logMiddleware = require('../-grupo_1_CipherRigs/src/middlewares/logMiddleware'); // Para llevar un registro en txt de las URL visitadas
const userLoggedMiddleware = require('../-grupo_1_CipherRigs/src/middlewares/userLoggedMiddleware');
const session = require('express-session');
const cookies = require('cookie-parser');

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.urlencoded({extended :false}));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(session({secret: "frase secreta"}));
app.use(cookies());
app.use(logMiddleware);
app.use(userLoggedMiddleware);
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
app.use('/rigs', rig); //localhost3000/rigs


app.use('/login', user); //localhost3000/loguearse

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
}); // si el servidor corre bien, corre este mensaje por consola