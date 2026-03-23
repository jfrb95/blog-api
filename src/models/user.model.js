const prisma = require('./prisma.js');

const UserModel = function() {
  return {
    testUserModel() {
      console.log("user model success");
    }
  }
};

module.exports = UserModel();