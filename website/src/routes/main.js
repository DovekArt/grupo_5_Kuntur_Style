// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
// router.get('/search', mainController.search);
// router.get('/prueba', mainController.prueba);

module.exports = router;