const { UserModel } = require('../models');

const UserController = {
  //GETs
  async getAllUsers(req, res, next) {
    try {

      const data = await UserModel.findAll();
      return res.json(data);

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getUserById(req, res, next) {
    try {

      const id = getIdFromReq(req);
      const data = req.body;

      const result = await UserModel.update(id, data);
      return res.json(result);

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getUserPosts(id) {
    try {

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  
  //POSTs
  async createUser() {
    try {

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async deleteUser() {
    try {

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //PUTs
  async updateUser() {
    try {

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};

function getIdFromReq(req) {
  return Number(req.params.userId);
}


module.exports = UserController;