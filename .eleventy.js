module.exports = function(eleventyConfig) {
  // Tell Eleventy to watch our compiled CSS file for changes.
  eleventyConfig.addWatchTarget("./_site/css/style.css");

  // Tell Eleventy to copy the /src/assets/ folder to the /_site/assets/ folder.
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Tell Eleventy to copy the /src/admin/ folder to the /_site/admin/ folder.
  eleventyConfig.addPassthroughCopy("src/admin");

  // Configure the input and output directories.
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site"
    },
    // Files to process as templates
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
    // Let Nunjucks process HTML files
    htmlTemplateEngine: "njk",
    // Let Nunjucks process Markdown files
    markdownTemplateEngine: "njk"
  };
};
