const authMiddleware = (req,res,next)=> {
    
    if(!req.session.loggedUser && !req.session.loggedAdmin) {
        return res.redirect("/")
    } 
    next();
}

module.exports = authMiddleware;