// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const usersController = require('../controllers/usersController');

/*** GET ONE PRODUCT ***/
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);
router.get('/login', usersController.login);
router.get('/list', usersController.list);

module.exports = router;