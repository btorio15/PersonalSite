module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("resources");
  eleventyConfig.addPassthroughCopy("resume.css");
  eleventyConfig.addPassthroughCopy("theme.js");
  eleventyConfig.addPassthroughCopy("now.css");

  return {
    pathPrefix: "/PersonalSite/",
    dir: {
      input: "src",
      includes: "../_includes",
      output: "_site",
    },
  };
};