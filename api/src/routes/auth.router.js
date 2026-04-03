const { Router } = require('express');


const passport = require('../config/passport.js');
const { AuthController } = require('../controllers');

const router = Router();

router.post('/login', AuthController.logUserIn);
router.post('/sign-up', AuthController.signUserUp);

module.exports = router;