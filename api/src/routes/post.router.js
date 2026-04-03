const { Router } = require('express');

const { PostController } = require('../controllers');

const router = Router();

router.route('/')
  .get(PostController.getAllPosts)
  .post(PostController.createPost)
;

router.route('/:id')
  .get(PostController.getPostById)
  .put(PostController.updatePost)
  .delete(PostController.deletePost)
;

router.route('/:id/comments')
  .get(PostController.getPostComments)
;

module.exports = router;