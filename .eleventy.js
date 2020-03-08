const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function(config) {
  // minify css to output inline in head
  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addTransform("htmlmin", function(content, outputPath) {
    if(outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }
    return content;
  });


  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy({ assets: "/" });
}