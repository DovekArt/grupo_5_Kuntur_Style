const bcryptjs = require('bcryptjs');
const { check, body } = require("express-validator");
const db = require('../database/models');
module.exports = [
  check("email")
    .notEmpty()
    .withMessage("Debes proporcionar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido"),

  body("password")
    .notEmpty()
    .withMessage(
      "Debes ingresar tu contraseña"
    ).bail()
    .custom((value, {req}) => {
      return db.User.findOne({
        where : {
          email : req.body.email
        }
      }).then(user => {
        if(!user || !bcryptjs.compareSync(value, user.password)){
          return Promise.reject()
        }
      }).catch(() => Promise.reject('Credenciales inválidas'))
    })
];
