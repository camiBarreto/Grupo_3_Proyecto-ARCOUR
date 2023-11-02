const adminMiddleware = (req,res,next)=> {
    if(!req.session.loggedAdmin){
        return res.redirect("/")
    }
    next();
}

module.exports = adminMiddleware;