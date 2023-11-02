const { User, Admin } = require("../database/models");

const isLogged = async (req, res, next) => {
    res.locals.validationUser = false;
    res.locals.validationAdmin = false;

    let emailInCookie = req.cookies.userEmail;
	try {
        let userFromCookie = await User.findOne({
            raw: true,
            where: {
              email: emailInCookie,
            },
          });
          let adminFromCookie = await Admin.findOne({
            raw: true,
            where: {
              email_enterprise: emailInCookie,
            },
          });
          if (userFromCookie) {
              req.session.loggedUser = userFromCookie;
          } else if (adminFromCookie){
              req.session.loggedAdmin = adminFromCookie;
          }
    } catch (error) {
        console.error(error);
    }

    //Cokkies validation (Parte de mariano)

    if(req.session.loggedUser) {
        res.locals.validationUser = true;
        res.locals.loggedUser = req.session.loggedUser;
    } else if (req.session.loggedAdmin) {
        res.locals.validationAdmin = true;
        res.locals.loggedAdmin = req.session.loggedAdmin;
    }
    
    next();
}

module.exports = isLogged;