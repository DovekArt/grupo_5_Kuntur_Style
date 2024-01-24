const {check} = require("express-validator");
module.exports=[
  check("nombre").notEmpty().withMessage("Tienes que completar el nombre"),
  check("nombre").isLength({ min: 5, max: 40}).withMessage("El nombre debe contener entre 5 y 40 caracteres").bail(),

  check("marca").notEmpty().withMessage("Tienes que escribir una marca").bail().optional().withMessage("Si no escribes una marca, se asignará el valor 'KS'").default("KS"),

  check("precio").notEmpty().withMessage("Tienes que escribir una cifra").bail(),
  check("precio").isFloat().withMessage("Tienes que escribir una cifra numérica").bail(),

  check("codigo").notEmpty().withMessage("Debes escribir un código para el producto").bail(),

  check("color").notEmpty().withMessage("Tienes que escribir un color").bail().optional().withMessage("Si no escribes un color, se asignará el valor 'Sin especificar'").default("Sin especificar."),

  check("material").notEmpty().withMessage("Tienes que escribir un material").bail().optional().withMessage("Si no escribes un material, se asignará el valor 'Sin especificar'").default("Sin especificar."),

  check("images").notEmpty().withMessage("Tiene que seleccionar al menos una imagen").bail(),
  check("images").isArray().withMessage("Las imágenes deben ser un array").bail(),

  check("xs").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para XS").bail(),
  check("s").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para S").bail(),
  check("m").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para M").bail(),
  check("l").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para L").bail(),
  check("xl").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para XL").bail(),
  check("unico").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock para Talle Unico").bail(),
];