// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middlewares Require ************
const productImageUpload = require("../middlewares/productImage");
// const productFormValidation = require("../middlewares/productForm");

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);
router.post('/create', productImageUpload.array('images'), productsController.store);

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/update/:id', productImageUpload.array('image'), productsController.update);

/*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productsController.delete);
router.delete('/destroy/:id', productsController.destroy);

/*** RESTORE ONE PRODUCT***/ 
router.post('/restore/:id', productsController.restore); 

/*** GET ALL PRODUCTS RECYCLES ***/ 
router.get('/recycles', productsController.recycle);

module.exports = router;
