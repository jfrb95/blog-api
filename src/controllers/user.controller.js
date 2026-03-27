const { UserModel, PostModel, CommentModel } = require('../models');

const UserController = {
  //GETs
  async getAllUsers(req, res, next) {
    try {

      const userList = await UserModel.findAll();
      return res.json(userList);

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getUserById(req, res, next) {
    try {

      const userId = getIdFromReq(req);
      
      const user = await UserModel.findById(userId);
      return res.json(user);

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getUserPosts(req, res, next) {
    try {
      //Needs testing when posts can be created
      const userId = getIdFromReq(req);

      const userPosts = await PostModel.findByAuthorId(userId);
      return res.json(userPosts);

    } catch(err) {
      console.error(err);
      next(err);
    }
  },
  async getUserComments(req, res, next) {
    try {
      //Needs testing when posts can be created
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
      //Test this to make sure cascading is working in prisma,
      //  also see what it returns

      const userId = getIdFromReq(req);

      const result = await UserController.deleteUser(userId);
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

//Utilities
function getIdFromReq(req) {
  return Number(req.params.userId);
}


module.exports = UserController;