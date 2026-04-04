module.exports = async function(eleventyConfig) {
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