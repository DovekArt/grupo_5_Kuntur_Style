// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middlewares Require ************
const productImageUpload = require("../middlewares/productImage");
const productFormValidation = require("../middlewares/productForm");

router.get('/', productsController.list);
router.post('/', productImageUpload.any("imagen"), productFormValidation, productsController.create);
router.get('/detail/:id', productsController.detail);

module.exports = router;