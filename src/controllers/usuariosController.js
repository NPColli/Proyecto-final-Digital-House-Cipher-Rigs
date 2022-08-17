let db = require("../../database/models");
const { validationResult } = require("express-validator"); 
const bcrypt = require("bcryptjs");


let usuariosController = {
    login: (req, res) => {
        console.log(req.cookies); 
        return res.status(200).render("users/login");
      },
    processLogin: (req, res) => {
        db.User.findAll()
          .then((users) => {
            let usersToLogin = users.filter(function (user) {
              return user.email === req.body.email;
            });
            let userToLogin = usersToLogin[0];
      
    
            if (userToLogin) {
          
              let isOkThePassword = bcrypt.compareSync(
                req.body.password,
                userToLogin.password
              );
    
              if (isOkThePassword) {
                delete userToLogin.password; 
        
                req.session.userLogged = userToLogin;
                
                if (req.body.rememberUser) {
            
                  res.cookie("userEmail", req.body.email, {
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                  });
                }
                console.log(req.session.userLogged.id);
                return res.redirect('/');
              }
              return res.render("users/login", { 
                errors: {
                  email: {
                    msg: "Las credenciales son inválidas",
                  },
                },
              });
            }
    
            return res.render("users/login", { 
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
        
        const resultValidation = validationResult(req);
        
        if (!resultValidation.isEmpty()) {
          res.render("users/register", {
            errors: resultValidation.mapped(), 
            oldData: req.body, 
  
          });
        } else {
          
          console.log("Entró al método processRegister del usersController.js");
    
          db.User.create({
            
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            rol: 1, 
            password: bcrypt.hashSync(
              
              req.body.password,
              10 
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
        console.log(req.cookies.userEmail); 
        res.render("users/profile", {
          user: req.session.userLogged, 
        });
      },
      logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
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
        
        if (errors.isEmpty()) {
      
          console.log("Entró al método update del usersController.js");
          db.User.update(
            {
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
