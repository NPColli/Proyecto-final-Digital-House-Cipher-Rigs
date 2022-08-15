let db = require("../../database/models");
const { validationResult } = require("express-validator"); // trae los resultados de las validaciones
const bcrypt = require("bcryptjs");


let usuariosController = {
    login: (req, res) => {
        console.log(req.cookies); //trae todas las cookies del navegador
        return res.status(200).render("users/login");
      },
    processLogin: (req, res) => {
        db.User.findAll()
          .then((users) => {
            let usersToLogin = users.filter(function (user) {
              return user.email === req.body.email;
            });
            //devuelve el objeto usuario a loguearse, dentro de un array
            let userToLogin = usersToLogin[0];
            //devuelve el objeto usuario en sí
    
            if (userToLogin) {
              // si el mail existe en la base de datos, compara las contraseñas. Devuelve true or false
              let isOkThePassword = bcrypt.compareSync(
                req.body.password,
                userToLogin.password
              );
    
              if (isOkThePassword) {
                delete userToLogin.password; //el usuario se guarda en session, la contraseña se elimina
                //session, va con request, porque es manejada desde el back. A diferencia de cookie, que es manejada por el front (xq se almacenará en el nav del usuario)
                req.session.userLogged = userToLogin;
                //ahora el obj session, tiene otra propiedad: userLogged (además de cookie), que guarda toda la info de userToLogin
                //cuando ya tengo los datos de la persona a loguear, pregunto si tmb viajó el rememberUser:
                if (req.body.rememberUser) {
                  // si viajó, quiero que la cookie se llame userEmail y guarde el email, * 1 seg * 60 * 60 = 1 hora
                  res.cookie("userEmail", req.body.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                  });
                }
                console.log(req.session.userLogged.id);
                return res.redirect('/');
              }
              return res.render("users/login", { //si la contraseña no es correcta
                errors: {
                  email: {
                    msg: "Las credenciales son inválidas",
                  },
                },
              });
            }
    
            return res.render("users/login", { //si la email no es correcto
              errors: {
                email: {
                  msg: "No se encuentra este email en nuestra base de datos",
                },
              },
            });
          })
          .catch((error) => console.log(error));
      },
      register: (req, res) => {
        console.log("entrando al método register del userController.js");
        res.status(200).render("users/register");
      }
      ,
    processRegister: (req, res) => {
        //En un array, guardo los errores enviados desde la validación de la ruta:
        const resultValidation = validationResult(req);
        // validationResult cuenta con la propiedad isEmpty, que me permite saber si el array está vacío
        // res.send(resultValidation);
        // res.send(resultValidation.mapped());
        // res.send(resultValidation.errors.length > 0);
    
        /*Si el array de errores que viene de la ruta, NO está vacío, es decir, HAY errores, entonces le comparto 
         a la vista, los mismos, y la data correcta ya ingresada */
        if (!resultValidation.isEmpty()) {
          res.render("users/register", {
            errors: resultValidation.mapped(), //los envío como un obj. lit. para que sea + facil trabajarlos, que dentro de un array
            oldData: req.body, // envío los datos de los campos que estuvieron correctos
            //oldImage: req.file, //es posible persistir la imagen??(recordar que viaja por file y no por body)
          });
        } else {
          /*Si no hubo errores, genero el usuario a partir de los datos del request*/
          console.log("Entró al método processRegister del usersController.js");
    
          db.User.create({
            //1ro nombre de las columnas BBDD, igual que en el modelo. 2do nombre del campo del formulario
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            rol: 1, // 0-Admin / 1-Comprador
            password: bcrypt.hashSync(
              //encripto password con la librería bcryptjs
              req.body.password,
              10 /*el ", 10" es la cantidad de "sal", un dato añadido que hace que los hash sean mucho más 
                  difíciles de romper. Para contraseñas se suele usar 10 o 12*/
            ),
          })
    
            .then((storedUser) => {
              return res.redirect("/");
            })
            .catch((error) => console.log(error));
        }
      },
      profile: (req, res) => {
        console.log("Entrando a Profile");
        console.log(req.session);
        console.log(req.cookies.userEmail); // si, No tildé recordar, saldrá undefined, porque no se grabó niguna cookie
        //si tildó recordar, veré el mail con el que se logueó, el cual usaré para loguear a la persona automáticamente
        res.render("users/profile", {
          user: req.session.userLogged, // le comparto la info a la vista
        });
      },
      logout: (req, res) => {
        res.clearCookie("userEmail"); // borra la cookie, sino, mientras dure esta, estoy en un bucle, y no puedo desloguearme
        req.session.destroy(); // directamente borra todo lo que está en session
        console.log(req.session);
        return res.redirect("/");
      },
      uEdit: (req, res) => {
        console.log("entrando al render de edición de Perfil");
        db.User.findByPk(req.params.id)
          .then(function (user) {
            return res.status(200).render("users/uEdit", { user: user });
          })
          .catch((err) => res.send(err));
      },
      uUpdate: (req, res) => {
        let errors = validationResult(req);
        //res.send(errors);
        if (errors.isEmpty()) {
          //hay errores en la validación??
          //console.log(req.file);
          console.log("Entró al método update del usersController.js");
          db.User.update(
            {
              //1ro nombre de las columnas BBDD, igual que en el modelo. 2do nombre del campo del formulario
              nombre: req.body.nombre,
              apellido: req.body.apellido,
              email: req.body.email,
            },
            {
              where: { id: req.params.id },
            }
          );
          res.redirect("/");
        } else {
          db.User.findByPk(req.params.id)
            .then(function (user) {
              return res
                .status(200)
                .render("users/uEdit", { user: user, errors: errors.mapped() });
            })
            .catch((err) => res.send(err));
        }
      },
}
module.exports = usuariosController;
