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

module.exports = productsFileUpload;