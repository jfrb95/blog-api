const { Router } = require('express');

const { CommentController } = require('../controllers');

const router = Router();

router.route('/')
  .get(CommentController.getAllComments)
  .post(CommentController.createComment)
;

router.route('/:id')
  .get(CommentController.getCommentById)
  .put(CommentController.updateComment)
  .delete(CommentController.deleteComment)
;

router.route('./:id/comments')
  .get(CommentController.getCommentComments)
;

module.exports = router;