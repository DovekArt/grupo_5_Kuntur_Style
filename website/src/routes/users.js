// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
<<<<<<< HEAD
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
=======
const usersController = require('../controllers/usersController');

/*** GET ONE PRODUCT ***/
router.get('/register', usersController.register);
router.post('/register', usersController.processRegister);
router.get('/login', usersController.login);
router.get('/list', usersController.list);
>>>>>>> b330e3c84a429cc6f9ce89629c81bda91d3b8ab2

module.exports = router;