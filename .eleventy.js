module.exports = function (eleventyConfig) {
  // Pass static assets through unchanged
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.addPassthroughCopy("resume.css");
  eleventyConfig.addPassthroughCopy("theme.js");
  eleventyConfig.addPassthroughCopy("now.css");

  return {
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site",
    },
  };
};