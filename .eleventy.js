module.exports = function(eleventyConfig) {
  // This is the crucial line that fixes all the paths
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy({ "./src/admin/config.yml": "./admin/config.yml" });

  // Add this line to tell Eleventy the base URL of your site
  return {
    pathPrefix: "/septic-sense-pro/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
