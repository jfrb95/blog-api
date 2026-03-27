const { Router } = require('express');

const { UserController } = require('../controllers');

const router = Router();

router.route('/')
  .get(UserController.getAllUsers)
  .post(UserController.createUser)
;

router.route('/:userId')
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser)
;

router.route('./:userId/posts')
  .get(UserController.getUserPosts)
;

router.route('./:userId/comments')
  .get(UserController.getUserComments)
;

module.exports = router;