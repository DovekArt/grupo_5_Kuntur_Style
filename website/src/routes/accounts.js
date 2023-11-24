// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const accountsController = require('../controllers/accountsController');

/*** GET ONE PRODUCT ***/ 
router.get('/register', accountsController.register);
router.get('/login', accountsController.login);

module.exports = router;