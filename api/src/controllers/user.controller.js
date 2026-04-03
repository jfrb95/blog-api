const { UserModel, PostModel, CommentModel } = require('../models');
const { getIdFromReq } = require('../utils.js');

module.exports = {
  //GETs
  async getAllUsers(req, res, next) {
    try {

      const userList = await UserModel.findAll();
      return res.json(userList);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getUserById(req, res, next) {
    try {

      const userId = getIdFromReq(req);

      const user = await UserModel.findById(userId);
      return res.json(user);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getUserByEmail(req, res, next) {
    try {
      const userEmail = req.params.email;

      const user = await UserModel.findByEmail(userEmail);
      return res.json(user);

    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  async getUserPosts(req, res, next) {
    try {

      const userId = getIdFromReq(req);

      const userPosts = await PostModel.findByAuthorId(userId);
      return res.json(userPosts);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getUserComments(req, res, next) {
    try {
      
      const userId = getIdFromReq(req);

      const userComments = await CommentModel.findByAuthorId(userId);
      return res.json(userComments);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //POSTs
  async createUser(req, res, next) {
    try {

      const data = req.body;

      const result = await UserModel.create(data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async deleteUser(req, res, next) {
    try {

      const userId = getIdFromReq(req);

      const result = await UserModel.delete(userId);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //PUTs
  async updateUser(req, res, next) {
    try {

      const userId = getIdFromReq(req);
      const data = req.body;

      const result = await UserModel.update(userId, data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};