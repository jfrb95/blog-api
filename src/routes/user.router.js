const { Router } = require('express');

const { UserController } = require('../controllers');

const router = Router();

router.route('/')
  .get(UserController.getAllUsers)
  .post(async (req, res) => {
    //need username, password, email
    const data = req.body;
    console.log('post', data);

    const result = await UserModel.create(data);
    return res.json(result);
  })
;

router.route('/:userId')
  .put(UserController.updateUser);
;

module.exports = router;