const { Router } = require('express');


const passport = require('../config/passport.js');
const { AuthController } = require('../controllers');

const router = Router();

router.post('/login', AuthController.logUserIn);

module.exports = router;