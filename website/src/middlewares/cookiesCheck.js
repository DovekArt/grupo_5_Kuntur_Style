module.exports = (req,res,next) => {

  if(req.cookies.mercadoLiebre14){
    req.session.userLogin = req.cookies.mercadoLiebre14
  }
  next()
}