//MIDDLEWARE QUE VALIDA SI EL USUARIO ESTA LOGEADO Y ES ADMINISTRADOR
function adminMiddleware(req, res, next) {
    if(!req.session.userLogin){
        return res.redirect("/"); 
    }else{
        if(req.session.userLogin && !req.session.userLogin.rol == 1){
            return res.redirect("/");
        }
    }
    next();
}
module.exports=adminMiddleware;