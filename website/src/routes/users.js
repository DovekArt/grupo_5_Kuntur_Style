// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register,login,profile,processRegister,processLogin,logout, update, checkEmail} = require('../controllers/usersController');

// ************ Validations ************
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');

router
    .get('/register', register)
    .post('/register', registerValidator, processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    .get('/profile', userCheck, profile)
    .put('/update', userCheck, update)
    .get('/logout', logout)

    /* APIs */
    .post('/api/check-email', userCheck,checkEmail);

module.exports = router;