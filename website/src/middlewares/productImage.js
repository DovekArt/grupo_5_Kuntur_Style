<<<<<<< HEAD
const multer = require('multer');
const path = require('path');

const storageImgProduct = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null,'public/img/productos')
    },
    filename : function (req,file,callback){
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const productsFileUpload = multer({
    storage : storageImgProduct
})
=======
const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({

    destination: (req, file, callback) => {
        let folder = path.join(__dirname, "../../public/img/productos");
        callback(null, folder);
    },
    
    filename: (req, file, callback) => {
        let imgName = 'producto-' + Date.now() + path.extname(file.originalname);
        callback(null, imgName)
    }
});

const productsFileUpload = multer({ storage });
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2

module.exports = productsFileUpload;