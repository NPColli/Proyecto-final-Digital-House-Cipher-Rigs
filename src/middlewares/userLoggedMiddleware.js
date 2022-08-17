const db = require("../../database/models");

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;
  if (req.session.userLogged) {
    
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    return next();
    
  } else if (req.cookies.email) {
    db.User.findOne({
      where: {
        email: req.cookies.email,
      },
    }).then((user) => {
      
      res.locals.isLogged = true;
      req.session.userLogged = user;
      res.locals.userLogged = user;
      return next();
    });
  } else {
    return next();
  }
}

module.exports = userLoggedMiddleware;
