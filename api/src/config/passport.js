const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const { UserModel } = require('../models');

const options = {
  secretOrKey: process.env.JWT_SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

passport.use(new JwtStrategy(options, async (payload, done) => {
  try {
    
    const user = await UserModel.findById(payload.userId);
    //change to include only the users necessary details

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }

  } catch (error) {
    return done(error, false);
  }
}));

module.exports = passport;