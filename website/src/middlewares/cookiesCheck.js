module.exports = (req,res,next) => {

  if(req.cookies.KunturStyle){
    req.session.userLogin = req.cookies.KunturStyle
  }
  next()
}