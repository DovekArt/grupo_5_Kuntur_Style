const multer = require('multer');
const path = require('path');

// Función para verificar el tipo de archivo
const imageFileFilter = (req, file, callback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true); // Aceptar el archivo
  } else {
    callback(new Error('Solo se permiten archivos de imagen (jpg, png, webp, gif)')); // Rechazar el archivo
  }
};

// Configuración de multer con verificación de tipo de archivo
const storageImgProduct = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/img/productos');
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_products${path.extname(file.originalname)}`);
  }
});

const productsFileUpload = multer({
  storage: storageImgProduct,
  fileFilter: imageFileFilter // Aplicar verificación de tipo de archivo
});

module.exports = productsFileUpload;