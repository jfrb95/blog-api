const jwt = require('jsonwebtoken');

const { UserModel } = require('../models');

function verifyPassword(givenPassword, userPassword) {
  return givenPassword === userPassword;
}

module.exports = {
  async logUserIn(req, res, next) {

    try {
      const email = req.body.email;
      const user = await UserModel.findByEmail(email);

      if (!verifyPassword(req.body.password, user.password)) {
        return res.status(401).json({ error: "Invalid credentials" });
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
    } catch (error) {
      console.error(error);
      next(error);
    }
  },

  async signUserUp(req, res) {

  },

  async logUserOut(req, res) {

  }
};