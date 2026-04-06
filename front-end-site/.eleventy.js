const less = require('./src/config/processors/less.js');

module.exports = async function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src/assets');

  //nice

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