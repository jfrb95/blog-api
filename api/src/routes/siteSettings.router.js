const { Router } = require('express');

const { SiteSettingsController } = require('../controllers/siteSettings.controller.js');

const router = Router();

router.route('/featured-post')
  .get(SiteSettingsController.getFeaturedPost)
  .post(SiteSettingsController.setFeaturedPost)
  .delete(SiteSettingsController.removeFeaturedPost)
;

module.exports = router;