const userModel = require("../models/usersModels");
const adminModel = require("../models/adminsModels");

const isLogged = (req, res, next) => {
    res.locals.validationUser = false;
    res.locals.validationAdmin = false;

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