const userModel = require("../models/usersModels");
const adminModel = require("../models/adminsModels");

const isLogged = (req, res, next) => {
    res.locals.validationUser = false;
    res.locals.validationAdmin = false;

    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = userModel.findByEmail(emailInCookie);
	let adminFromCookie = adminModel.findByEmail(emailInCookie);


    if (userFromCookie) {
		req.session.loggedUser = userFromCookie;
	} else if (adminFromCookie){
		req.session.loggedAdmin = adminFromCookie;
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