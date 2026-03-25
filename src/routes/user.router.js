const { Router } = require('express');

//REMOVE THE FOLLOWING LATER IN DEVELOPMENT 
//  - CURRENTLY BYPASSING CONTROLLERS

const { UserModel } = require('../models');
//END

const router = Router();

router.route('/')
  .get(async (req, res) => {
    const data = await UserModel.findAll();
    return res.json(data);
  })
;

router.route('/:userId')
  .put((req, res) => {
    console.log(req.body);
    return res.send(req.body);
  })

module.exports = router;