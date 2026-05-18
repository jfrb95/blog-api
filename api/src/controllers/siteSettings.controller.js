const { PostModel, SiteSettingsModel } = require('../models');

module.exports = {
  //GETs
  async getFeaturedPost(req, res, next) {
    try {

      return res.send("nice");
      console.log("get featured post");
      const featuredPostId = await SiteSettingsModel.getFeaturedPostId();
      const featuredPost = await PostModel.getFeaturedPostId(featuredPostId);
      return res.json(featuredPost);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },

  //POSTs
  async setFeaturedPost(req, res, next) {
    try {

      console.log("set featured post");
      const newFeaturedPostId = req.newFeaturedPostId;

      const result = await SiteSettingsModel.setFeaturedPost(newFeaturedPostId);
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  },
  async removeFeaturedPost() {
    try {

      console.log("remove featured post");
      const result = await SiteSettingsModel.removeFeaturedPost();
      return res.json(result);

    } catch (err) {
      console.error(err);
      next(err);
    }
  }
};