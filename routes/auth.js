const express = require('express');

const authController = require('../controllers/auth');
const { validateUserForRegister, validateUserForLogin } = require('../middlewares/validators');

const router = express.Router();

router.post('/login', validateUserForLogin, authController.login);
router.post('/register', validateUserForRegister, authController.register);

module.exports = router;
