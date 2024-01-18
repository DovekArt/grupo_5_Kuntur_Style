// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register,login,profile,processRegister,processLogin,logout, update, checkEmail} = require('../controllers/usersController');

// ************ Validations ************
// const registerValidator = require('../validations/registerValidator');
// const loginValidator = require('../validations/loginValidator');
// const userCheck = require('../middlewares/userCheck');s

router
    .get('/register', register)
    .post('/register', processRegister)
    .get('/login', login)
    // .post('/login',loginValidator, processLogin)
    // .get('/profile',userCheck, profile)
    // .put('/update',userCheck,uploadImgUser.single('image'),update)
    // .get('/logout',logout)

    /* APIs */
    // .post('/api/check-email',checkEmail);

module.exports = router;