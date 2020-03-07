const CleanCSS = require("clean-css");

module.exports = function(config) {
  // minify css to output inline in head
  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  config.addLayoutAlias('page', 'layouts/page.njk');
  config.addPassthroughCopy({ assets: "/" });
}