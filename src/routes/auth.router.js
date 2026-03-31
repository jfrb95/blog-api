const { Router } = require('express');
const jwt = require('jsonwebtoken');

const passport = require('../config/passport.js');
const { UserModel } = require('../models');

const router = Router();

router.post('/login', 
  async function(req, res) {
    
    const email = req.body.email;
    const user = await UserModel.findByEmail(email);
    
    if (!verifyPassword(req.body.password, user)) {
      throw new Error("Invalid Login Credentials");
    }

    //put all data that might be relevant inside of this object:
    const payload = {
      myId: user.id,
    }
    
    const secret = process.env.JWT_SECRET;

    const options = {
      expiresIn: "1d",
    };

    const token = jwt.sign(payload, secret, options);

    return res.send(token);
  }
);

function verifyPassword(password, userObj) {
  return password === userObj.password;
}

module.exports = router;