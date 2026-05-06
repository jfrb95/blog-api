const javascript = require('./src/config/processors/javascript.js');
const less = require('./src/config/processors/less.js');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = async function(eleventyConfig) {

  //eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.on('eleventy.after', javascript);
  eleventyConfig.on('eleventy.after', less);

  return {
    dir: {
      input: "src", // Source files directory
      output: "public", // Build output directory
      includes: "_includes", // Partial templates directory
      data: "_data", // Global data files directory
    },
    htmlTemplateEngine: "njk", // Nunjucks for HTML templates
  };
};