module.exports = function(eleventyConfig) {
    // Correctly handle passthrough copies for assets and admin panel
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy({"src/css/style.css": "css/style.css"});

    // Add a watch target for our compiled CSS.
    eleventyConfig.addWatchTarget("./_site/css/style.css");

    // Return the configuration object
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
