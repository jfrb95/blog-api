const jwt = require('jsonwebtoken');

const { UserModel } = require('../models');

function verifyPassword(givenPassword, userPassword) {
  return givenPassword === userPassword;
}

function hashPassword(password) {
  //add hashing here
  return password;
}

function createJwt(user, options) {

  //put all data that might be relevant inside of this object:
  const payload = {
    myId: user.id,
  }

  const secret = process.env.JWT_SECRET;

  return jwt.sign(payload, secret, options);
}

module.exports = {
  async logUserIn(req, res, next) {

    try {
      const email = req.body.email;
      const user = await UserModel.findByEmail(email);

      if (!verifyPassword(req.body.password, user.password)) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const options = {
        expiresIn: '1d',
      };

      const token = createJwt(user, options);

      return res.status(201).json({ token });

    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async signUserUp(req, res, next) {
    try {
      
      const existingUser = await UserModel.findByEmail(req.body.email);
      if (existingUser) {
        return res.status(409).json({ error: "User with that email already exists." });
      }

      const userData = {
        email: req.body.email,
        username: req.body.username,
        password: hashPassword(req.body.password),
        name: req.body.name || null,
      }

      const user = await UserModel.create(userData);

      const options = {
        expiresIn: '1d'
      }
      const token = createJwt(user, options);

      return res.status(201).json({ token });

    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async logUserOut(req, res) {

  }
};