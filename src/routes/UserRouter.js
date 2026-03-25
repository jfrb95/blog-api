const { Router } = require('express');

//REMOVE THE FOLLOWING LATER IN DEVELOPMENT 
//  - CURRENTLY BYPASSING CONTROLLERS

const { UserModel } = require('../models');
//END

const router = Router();

router.route('/')
  .get(async (req, res) => {
    const data = await UserModel.findAll();
    res.json(data);
  })
;

module.exports = router;