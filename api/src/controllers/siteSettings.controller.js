const { PostModel, SiteSettingsModel } = require('../models');

module.exports = {
  //GETs
  async getFeaturedPost(req, res, next) {
    try {

      const featuredPostId = await SiteSettingsModel.getFeaturedPostId();
      const featuredPost = await PostModel.findById(featuredPostId);
      return res.json(featuredPost);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //POSTs
  async setFeaturedPost(req, res, next) {
    try {

      const newFeaturedPostId = req.body.newFeaturedPostId;

      const result = await SiteSettingsModel.setFeaturedPost(newFeaturedPostId);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async removeFeaturedPost(req, res, next) {
    try {

      const result = await SiteSettingsModel.removeFeaturedPost();
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};