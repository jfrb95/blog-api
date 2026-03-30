const { UserModel, PostModel, CommentModel } = require('../models');
const { getIdFromReq } = require('../utils.js');

module.exports = {
  //GETs
  async getAllComments(req, res, next) {
    try {

      const commentList = await CommentModel.findAll();
      return res.json(commentList);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async getCommentById(req, res, next) {
    try {

      const commentId = getIdFromReq(req);

      const comment = await CommentModel.findById(commentId);
      return res.json(comment);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //POSTs
  async createComment(req, res, next) {
    try {

      const data = req.body;

      const result = await CommentModel.create(data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async deleteComment(req, res, next) {
    try {

      const commentId = getIdFromReq(req);

      const result = await CommentController.deleteComment(commentId);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //PUTs
  async updateComment(req, res, next) {
    try {

      const commentId = getIdFromReq(req);
      const data = req.body;

      const result = await CommentModel.update(commentId, data);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};