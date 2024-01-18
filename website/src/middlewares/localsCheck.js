module.exports = (req, res, next) => {
  console.log(req.session.userLogin);

  res.locals.userLogin = req.session.userLogin && req.session.userLogin;

  next();
};