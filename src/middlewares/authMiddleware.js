function authMiddleware(req, res, next) {
  if (!req.session.userLogged) {
    //si no hay nadie logueado, te vuelve al login
    return res.redirect("users/login");
  }
  next(); // si hay alguien logueado, va al controlador 
}

module.exports = authMiddleware;
