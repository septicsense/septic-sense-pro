module.exports = function(eleventyConfig) {
    // Tell Eleventy to copy the /src/assets/ folder to the /_site/assets/ folder.
    eleventyConfig.addPassthroughCopy("src/assets");
    
    // Tell Eleventy to copy the /src/admin/ folder to the /_site/admin/ folder.
    eleventyConfig.addPassthroughCopy("src/admin");

    // Add the 'year' shortcode to get the current year.
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
