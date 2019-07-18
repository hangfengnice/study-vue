const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("/src/components"));
  },
  devServer: {
    open: true
  }
};
