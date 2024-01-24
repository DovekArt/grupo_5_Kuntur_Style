const db = require('../database/models');
const { check, body } = require("express-validator");
module.exports = [
  check("nombre")
    .isLength({ min: 3 })
    .withMessage("Mínimo tres caracteres")
    .bail()
    .isAlpha()
    .withMessage("Solo letras porfa!"),

  check("apellido")
    .isLength({ min: 3 })
    .withMessage("Mínimo tres caracteres")
    .bail()
    .isAlpha()
    .withMessage("Solo letras porfa!"),

  body("email")
    .notEmpty()
    .withMessage("Debes proporcionar un email")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido")
    .custom(value => {
      return db.User.findOne({
        where : {
          email : value
        }
      }).then(user => {
        if(user){
          return Promise.reject()
        }
      }).catch(() => Promise.reject('Este email ya se encuentra registrado!'))
  }),

  check("password")
    .isLength({
      min: 6,
      max: 18,
    })
    .withMessage(
      "La contraseña debe tener entre 6 y 18 caracteres"
    ),

  body("confirm_password")
    .notEmpty()
    .withMessage(
      "Debes validar tu contraseña"
    )
    .custom((value, { req }) => {
      if (value !== req.body.pass) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage(`La contraseña no coincide`),

  check("bases")
    .isString("on")
    .withMessage(
      "Debes aceptar las bases y condiciones"
    ),
];
