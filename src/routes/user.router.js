const { Router } = require('express');

const { UserController } = require('../controllers');

const router = Router();

router.route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser)
;

router.route('/:id')
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)
;

router.route('./:id/posts')
  .get(UserController.getUserPosts)
;

router.route('./:id/comments')
  .get(UserController.getUserComments)
;

module.exports = router;