const { UserModel, PostModel, CommentModel } = require('../models');
const { getIdFromReq } = require('../utils.js');

module.exports = {
  //GETs
  async getAllPosts(req, res, next) {
    try {

      const postList = await PostModel.findAll();
      return res.json(postList);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getPostById(req, res, next) {
    try {

      const postId = getIdFromReq(req);

      const post = await PostModel.findById(postId);
      return res.json(post);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getPostComments(req, res, next) {
    try {
      const postId = getIdFromReq(req);

      const postComments = await CommentModel.findByPostId(postId);
      return res.json(postComments);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //POSTs
  async createPost(req, res, next) {
    try {

      const data = req.body;

      const result = await PostModel.create(data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async deletePost(req, res, next) {
    try {
      
      const postId = getIdFromReq(req);

      const result = await PostController.deletePost(postId);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //PUTs
  async updatePost(req, res, next) {
    try {

      const postId = getIdFromReq(req);
      const data = req.body;

      const result = await PostModel.update(postId, data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};