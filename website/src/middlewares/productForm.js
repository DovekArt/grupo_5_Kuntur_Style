const {check} = require("express-validator");
const path = require("path");

module.exports=[

    check("imagen").custom((value, {req})=> {
        let file=req.files;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];

        if(!file || file==""){
            throw new Error("Debes agregar una imagen");
        } else {
            let fileExtension = path.extname(path.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error ("las extensiones permitidas son ${acceptedExtensions.join}");
            }
        }
        return true;
    }),
    
    check("nombre").notEmpty().withMessage("Tienes que completar el nombre"),
    check("nombre").isLength({ min: 5, max: 40}).withMessage("El nombre debe contener entre 5 y 40 caracteres").bail(),

    check("precio").notEmpty().withMessage("Tienes que escribir una cifra").bail(),
    check("precio").isFloat().withMessage("Tienes que escribir una cifra numérica").bail(),
    
    check("codigo").notEmpty().withMessage("Debes escribir un código para el producto").bail(),

    check("talle").notEmpty().withMessage("Tiene que seleccionar al menos un talle").bail(),

    check("stock").notEmpty().withMessage("Tiene que seleccionar una cantidad de stock"),

]